// Đăng xuất
export const logout = async (req, res) => {
  try {
    const cookie = req.cookies;
    if (!cookie || !cookie.refreshToken) {
      return res.status(400).json({
        message: "Không thể refresh Token trong cookies",
      });
    }

    // Xóa refresh Token ở cookie trình duyệt
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
    });
    refreshTokens = refreshTokens.filter(
      (token) => token !== req.cookies.refreshToken
    );
    return res.status(200).json({
      message: "Đăng xuất thành công",
    });
  } catch (error) {
    return res.status(500).json({
      message: error,
    });
  }
};
