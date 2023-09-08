// const getLocalItem = () => {
//     const savedData = localStorage.getItem('user-data')
//     if (savedData) {
//         return JSON.parse(localStorage.getItem('user-data'))
//     } else {
//         return null
//     }
// }

// export {
//     getLocalItem
// }

export const userFakeData = [
    {
        fullName: 'User_one',
        userName: 'user1',
        password: '1234',
        phone: '011111111',
        email: 'user1@gmail.com',
        bio: 'something'
    }
];

export const todoFakeData = [
    {
        id: "test_data_9/8/2023",
        title: "Test data ",
        description: "Test data",
        endDate: "2023-09-12",
        startDate: "2023-09-08",
        priority: "medium",
        status: 'pending',
        teamMember: ['user_2', 'user_3', 'user_4'],
        createdAt: new Date()
    }
];