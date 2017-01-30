module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "no-use-before-define": ["error", { "functions": true, "classes": true }],
        "no-param-reassign": 0
    }
}
