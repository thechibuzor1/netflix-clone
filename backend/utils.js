import  jwt from "jsonwebtoken";

export const generateToken = (user) => {
    return jwt.sign(
        {
            _id: user._id,
            name: user.name,
            email: user.email,

        },
        process.env.JWT_SECRET,
        { expiresIn: "30d" }

    )
};

export const isAuth = (req, res, next) => {
    const authorization = req.headers.authorization;
    if (authorization) {
        const token = authorization.slice(7, authorization.length); // Bearer XXXXXX
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).json({ error: "You are not authenticated" });
            }
            else {
                req.user = decoded;
                next();
            }
        });
    }   else {
        return res.status(401).json({ error: "No Token" });
    }
}