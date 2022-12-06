import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import HTTP from '../HTTP';
import API from '../API';

const initialState = {
    data: [],
    status: false,
    allBills: [],
    allBillsStatus: false,
    
    AppprovalBillStatus: false,
    billListStatus: false,
    billStatus: false,
    billPostStatus: false,
    billList: [],
    bill: {},
    billid: ''
}

export const postBill = createAsyncThunk("bills/postdata", (data) => {
    return HTTP.post('bills', data, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
    }).then((response) => {
        return response.data
    })
});

export const postApprovalStatus = createAsyncThunk("approval/changeStatus", (data) => {
    return HTTP.post('approval', data).then((response) => {
        return response.data
    })
});



export const getBillsByUserid = createAsyncThunk("bill/userid", (userid) => {
    return HTTP.get(`bills/${userid}`)
        .then((response) => {
            return response.data
        })
});

export const getAllBills = createAsyncThunk("bills/userid", () => {
    return HTTP.get(`bills`)
        .then((response) => {
            return response.data
        })
});

export const getBillByid = createAsyncThunk("bill/billid", (billid) => {
    return HTTP.get(`bill/${billid}`)
        .then((response) => {
            return response.data
        })
});


const billSlice = createSlice({
    name: 'dept',
    initialState,
    reducers: {
        updateBillID: (state, action) => {
            state.billid = action.payload
        },
        resetBillObj: (state) => {
            state.bill = {}
            state.billStatus = false
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(postBill.pending, (state) => {
                state.billPostStatus = false;
            })
            .addCase(postBill.fulfilled, (state, action) => {
                state.data = action.payload;
                state.billPostStatus = true;
            }).addCase(getBillsByUserid.pending, (state) => {
                state.billListStatus = false;
            })
            .addCase(getBillsByUserid.fulfilled, (state, action) => {
                state.billList = action.payload;
                state.billListStatus = true;
            }).addCase(getBillByid.pending, (state) => {
                state.billStatus = false;
            })
            .addCase(getBillByid.fulfilled, (state, action) => {
                state.bill = action.payload;
                state.billStatus = true;
            })
            .addCase(getAllBills.pending, (state) => {
                state.allBillsStatus = false;
            })
            .addCase(getAllBills.fulfilled, (state, action) => {
                state.allBills = action.payload;
                state.allBillsStatus = true;
            })
            .addCase(postApprovalStatus.pending, (state) => {
                state.AppprovalBillStatus = false;
            })
            .addCase(postApprovalStatus.fulfilled, (state, action) => {
                console.log(action)
                state.AppprovalBillStatus = true;
            })
    }
})

// console.log(userSlice)
export const { updateBillID,resetBillObj } = billSlice.actions

export default billSlice.reducer