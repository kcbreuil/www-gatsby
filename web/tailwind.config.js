module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
    purge: [],
    theme: {
        container: (theme) => ({
            center: true,
            padding: theme('spacing.5'),
        }),
        extend: {
            colors: {
                bckrmGreen: '#2E444F',
                bckrmGrey: '#4E5859',
            },
            fontSize: {
                'h1': '3.75rem',
            },
            gridRowStart: {
                '8': '8',
            },
            height: {
                '3/4': '75vh',
            },
            lineHeight: {
                '11': '3rem',
                '12': '4rem'
            },
        },
    },
    variants: {},
    plugins: [],
}
