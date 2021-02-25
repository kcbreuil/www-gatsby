module.exports = {
    purge: ['./src/**/*.js', './src/**/*.jsx'],
    theme: {
        extend: {
            gridTemplateRows: {
                '10': 'repeat(10, minmax(0, 1fr))',
            },
        },
        container: (theme) => ({
            center: true,
            padding: theme('spacing.5'),
        }),
    },
    variants: {},
    plugins: [],
}
