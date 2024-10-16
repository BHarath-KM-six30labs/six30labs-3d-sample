/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontSize: {
       size68px: '4.25rem',
       size64px: '4rem',
       size24px:'1.5rem',
       size18px:'1.125rem',
       size20px:'1.25rem',
       size16px:'1rem',
       size48px:'3rem',
       size40px:'2.5rem',
       size32px:'2rem',
       size36px:'2.25rem',
       size28px:'1.75rem',
       size54px:'3.375rem',
      },
      fontFamily: {
        Hedvig: ['Hedvig', 'sans-serif'],
        Numans:['Numans', 'sans-serif'],
      },
      colors: {
        primary: '#F5F5F5',
        pimage: '#E3E3E3',
        lightblack:'#1E1E1E',
        // ndlLightGray: '#E7E7E7',
        // ndlDarkGary: '#9A9A9A',
      },
      screens: {
        // tablets: { max: '1023px' },
        tablets: { max: '1050px' },
        // smallerTablets: { max: '930px' },
        mobiles: { max: '800px' },
        // mobiles: { max: '768px' },
        smallerMobiles: { max: '376px' },
      },
      flexBasis: {
        '1/2-gap-8': 'calc(50% - (1/2 * 2rem))',
        '1/2-gap-6': 'calc(50% - (1/2 * 1.5rem))',
        '1/2-gap-4': 'calc(50% - (1/2 * 1rem))',
        '1/4-gap-8': 'calc(25% - ((0.25*3) * 2rem))',
        '1/3-gap-8': 'calc(33.333333% - (((1/3)*2) * 2rem))',
      },
    },
  },
  plugins: [],
};
