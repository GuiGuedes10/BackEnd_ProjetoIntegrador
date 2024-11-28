import jwt from "jsonwebtoken";

export function TokenVerification(token) {
  try {
    if (!token) {
      return {
        valid: false,
        message: "Error. Token don't exist",
      };
    }

    const decoded = jwt.verify(token, process.env.JWT_KEY);

    if (!decoded) {
      return {
        valid: false,
        message: "Erro. Token inválido",
      };
    }
    return {
      valid: true,
      message: "Token válido",
    };
  } catch (error) {
    return {
      valid: false,
      message: "Erro. Token inválido",
    };
  }
}

export function CreateToken(payload) {
  const token = jwt.sign(payload, process.env.JWT_KEY, {
    expiresIn: "8h",
  });
  return token;
}

export function TokenDecode(token) {
  if (!token) {
    return null;
  }

  const decoded = jwt.verify(token, process.env.JWT_KEY);

  if (!decoded) {
    return null;
  }

  return decoded;
}
