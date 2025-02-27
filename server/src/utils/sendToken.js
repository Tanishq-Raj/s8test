export const sendToken = (user, message, res) => {
  const token = user.generateToken();
  res
    .cookie("s8Token", token, {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ), 
      sameSite: 'none', 
      secure: true
    })
    .json({
      success: true,
      token,
      message,
      user,
    });
};
