module.exports = {
    purge: ['./src/**/*.js', './src/**/*.jsx'],
    theme: {
        extend: {},
        container: (theme) => ({
            center: true,
            padding: theme('spacing.5'),
        }),
    },
    variants: {},
    plugins: [],
}
