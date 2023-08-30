module.exports = ({ Otp }) => {
  return `
        <!doctype html>
            <html>
            <head>
                <meta name="viewport" content="width=device-width">
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
                <title>Optask</title>
               
            </head>
            <body>
                <h3>The Verification code is : ${otp} </h3>
                
            </body>
        </html>
    `;
};
