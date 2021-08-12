import {API_LOCALHOST, HOTELS, BRANCHES} from 'components/routes/config'

export const hotelsAPILink = (page = 1, items = 5) => {
    return API_LOCALHOST + HOTELS + '?' + 'page=' + page + '&items=' + items ;
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