import {API_LOCALHOST, HOTELS, BRANCHES} from 'components/routes/config'

export const hotelsAPILink = () => {
    return API_LOCALHOST + HOTELS;
}

export const hotelAPILink = (hotel_id) => {
    return API_LOCALHOST + HOTELS + '/' + hotel_id;
}

export const deleteBranchLink = (branch_id) => {
    return API_LOCALHOST + BRANCHES + '/' + branch_id;
}

export const branchesAPILink = (hotel_id) => {
    return API_LOCALHOST + HOTELS + '/' + hotel_id + BRANCHES;
}

export const newHotelBranchAPILink = (hotel_id) => {
    return API_LOCALHOST + HOTELS + '/' + hotel_id + BRANCHES;
}