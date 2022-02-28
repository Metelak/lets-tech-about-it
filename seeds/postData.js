const { Post } = require('../models');

const postdata = [
    {
        title: "Nerd Out On Tech Stuff!",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus viverra accumsan in nisl nisi scelerisque eu. Fringilla phasellus faucibus scelerisque eleifend. Turpis egestas sed tempus urna et pharetra pharetra. Tellus integer feugiat scelerisque varius. Donec adipiscing tristique risus nec. Ut sem nulla pharetra diam sit amet. Ultrices tincidunt arcu non sodales neque sodales ut etiam. Vitae suscipit tellus mauris a diam. Nibh ipsum consequat nisl vel pretium lectus quam. Tincidunt tortor aliquam nulla facilisi cras fermentum. Curabitur vitae nunc sed velit. Nunc sed blandit libero volutpat sed cras ornare arcu. Semper quis lectus nulla at volutpat. Eget mauris pharetra et ultrices. Posuere morbi leo urna molestie at elementum eu facilisis sed. Aliquam sem fringilla ut morbi.",
        user_id: 3,
    },
    {
        title: "Tips to Help Command-line Efficieny",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus viverra accumsan in nisl nisi scelerisque eu. Fringilla phasellus faucibus scelerisque eleifend. Turpis egestas sed tempus urna et pharetra pharetra. Tellus integer feugiat scelerisque varius. Donec adipiscing tristique risus nec. Ut sem nulla pharetra diam sit amet. Ultrices tincidunt arcu non sodales neque sodales ut etiam. Vitae suscipit tellus mauris a diam. Nibh ipsum consequat nisl vel pretium lectus quam. Tincidunt tortor aliquam nulla facilisi cras fermentum. Curabitur vitae nunc sed velit. Nunc sed blandit libero volutpat sed cras ornare arcu. Semper quis lectus nulla at volutpat. Eget mauris pharetra et ultrices. Posuere morbi leo urna molestie at elementum eu facilisis sed. Aliquam sem fringilla ut morbi.",
        user_id: 2,
    },
    {
        title: "Where Are My Backend Resources?",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus viverra accumsan in nisl nisi scelerisque eu. Fringilla phasellus faucibus scelerisque eleifend. Turpis egestas sed tempus urna et pharetra pharetra. Tellus integer feugiat scelerisque varius. Donec adipiscing tristique risus nec. Ut sem nulla pharetra diam sit amet. Ultrices tincidunt arcu non sodales neque sodales ut etiam. Vitae suscipit tellus mauris a diam. Nibh ipsum consequat nisl vel pretium lectus quam. Tincidunt tortor aliquam nulla facilisi cras fermentum. Curabitur vitae nunc sed velit. Nunc sed blandit libero volutpat sed cras ornare arcu. Semper quis lectus nulla at volutpat. Eget mauris pharetra et ultrices. Posuere morbi leo urna molestie at elementum eu facilisis sed. Aliquam sem fringilla ut morbi.",
        user_id: 1,
    },
    {
        title: "Tech Is Taking Over!",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus viverra accumsan in nisl nisi scelerisque eu. Fringilla phasellus faucibus scelerisque eleifend. Turpis egestas sed tempus urna et pharetra pharetra. Tellus integer feugiat scelerisque varius. Donec adipiscing tristique risus nec. Ut sem nulla pharetra diam sit amet. Ultrices tincidunt arcu non sodales neque sodales ut etiam. Vitae suscipit tellus mauris a diam. Nibh ipsum consequat nisl vel pretium lectus quam. Tincidunt tortor aliquam nulla facilisi cras fermentum. Curabitur vitae nunc sed velit. Nunc sed blandit libero volutpat sed cras ornare arcu. Semper quis lectus nulla at volutpat. Eget mauris pharetra et ultrices. Posuere morbi leo urna molestie at elementum eu facilisis sed. Aliquam sem fringilla ut morbi.",
        user_id: 2,
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;