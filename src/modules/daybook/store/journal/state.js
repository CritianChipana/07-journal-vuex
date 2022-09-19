
export default () => ( {
    isLoading: true,
    entries: [
        {
            id: new Date().getTime(), //21234165465
            date: new Date().toDateString(), //sat 23, juliio
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minima facere cupiditate commodi libero architecto ea reprehenderit tenetur possimus vitae accusamus, tempore a laudantium deleniti eaque debitis quibusdam totam temporibus!',
            picture: null
        },
        {
            id: new Date().getTime() + 1000, //21234165465
            date: new Date().toDateString(), //sat 23, juliio
            text: 'Pedro es el capo perolor sit amet consectetur adipisicing elit. Velit minima facere cupiditate commodi libero architecto ea reprehenderit tenetur possimus vitae accusamus, tempore a laudantium deleniti eaque debitis quibusdam totam temporibus!',
            picture: null
        },
        {
            id: new Date().getTime() + 2000, //21234165465
            date: new Date().toDateString(), //sat 23, juliio
            text: 'Juan que pasa con juan es el capo perolor sit amet consectetur adipisicing elit. Velit minima facere cupiditate commodi libero architecto ea reprehenderit tenetur possimus vitae accusamus, tempore a laudantium deleniti eaque debitis quibusdam totam temporibus!',
            picture: null
        }
    ]
})

