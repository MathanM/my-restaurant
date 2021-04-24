var ImageKit = require("imagekit");

var imagekit = new ImageKit({
    publicKey : "public_X9PMqJ0IH6IDaNZfaD7B/p+93hM=",
    privateKey : "private_Bn/tcQJK+O9uUfuYGtGGNUXIM1c=",
    urlEndpoint : "https://ik.imagekit.io/k4mzfmleb"
});

var authenticationParameters = imagekit.getAuthenticationParameters();

exports.handler = async () => {
    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "*"
        },
        body: JSON.stringify(authenticationParameters),
    };
    return response;
};
