export const fetchSpots = () => {
    return $.ajax({
        method: 'get',
        url: '/api/spots'
    });
};

export const fetchSpot = (id) => {
    return $.ajax({
        method: 'get',
        url: `/api/spots/${id}`
    });
};