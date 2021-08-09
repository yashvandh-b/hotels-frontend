import {LOCALHOST, HOTELS, HOTEL, NEW, EDIT, BRANCHES} from 'components/routes/config'

export const hotelsLink = () => {
    return LOCALHOST + HOTELS;
}

export const hotelLink = (hotel_id) => {
    return LOCALHOST + HOTELS + '/' + hotel_id;
}

export const newHotelLink = () => {
    return LOCALHOST + HOTEL + NEW;
}

export const editHotelLink = (hotel_id) => {
    return LOCALHOST + HOTELS + '/' + hotel_id + EDIT
}

export const branchLink = (hotel_id) => {
    return LOCALHOST + HOTELS + '/' + hotel_id + BRANCHES;
}

export const newHotelBranchLink = (hotel_id) => {
    return LOCALHOST + HOTELS + '/' + hotel_id + BRANCHES + NEW;
}