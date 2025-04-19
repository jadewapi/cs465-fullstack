const passport = require('passport');
const mongoose = require('mongoose');
const User = mongoose.model('users');

const register = (req, res) => {
    if (!req.body.name || !req.body.email || !req.body.password) {
        return res
            .status(400)
            .json({ "message": "All fields required" });
    }
    
    const user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
    user.setPassword(req.body.password);
    
    user.save()
        .then(() => {
            const token = user.generateJwt();
            res.status(200).json({ token });
        })
        .catch((err) => {
            res.status(400).json(err);
        });
    
};

const login = (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res
            .status(400)
            .json({ message: "All fields required" });
    }
    
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.error("❌ Passport error:", err);
            return res.status(500).json({ message: "Internal server error", error: err });
        }
        
        if (user) {
            const token = user.generateJwt();
            return res.status(200).json({ token });
        } else {
            console.warn("⚠️ Login failed:", info);
            return res.status(401).json({ message: info?.message || "Login failed" });
        }
    })(req, res);
};


module.exports = {
    register,
    login
};
