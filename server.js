const Hapi = require('@hapi/hapi');

const init = async() => {
    const server = Hapi.server({
        port: 5000,
        host: 'localhost',
    });

    await server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
};

init();

//Hapi secara default akan mengembalikan response “Not Found” ketika tidak ada response handler yang menangani permintaannya.