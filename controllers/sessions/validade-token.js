import { TokenVerification } from "../../utils/TokenHandle.js";

export async function validateToken(req, res) {
  try {
    const data = req.body;
    const TokenVerifed = TokenVerification(data.token);

  if (!TokenVerifed.valid) {
    res.status(403).send({ message: TokenVerifed.message });
    return;
  }

    res.status(200).send({ message: TokenVerifed.message});
  } catch (error) {
    console.log("Error validateToken", error);
    res.status(500).send({ message: "Erro ao validar token" });
  }
}
