import BCAAImg from './../assets/images/BCAA.png';
import WorkoutImg from './../assets/images/Workout.png';
import ppowderImg from './../assets/images/ppowder.png';
const navLinksData = [
    {id: 1,
      buttontext: 'WTA',
      link: '/',
      className:  ' ',
    },
    {id: 2,
      buttontext: 'About',
      link: '/about',
      className:  ' ',
    },
    {id: 3,
      buttontext: 'Shop',
      link: '/shop',
      className:  ' ',
    },
    {id: 4,
      buttontext: 'Ask the expert',
      link: '/expert',
      className:  ' ',
    },
    {id: 5,
      buttontext: 'Contact',
      link: '/contact',
      className:  ' ',
    },
    {id: 6,
      buttontext: 'WTA',
      link: '/d',
      className:  ' ',
    },
]

export const productsData =[
  {id: 1,
    seller: 'Best seller',
    product:  BCAAImg,
    name: 'BCAA Capsules'
  },
  {id: 2,
    seller: 'Best seller',
    product:  ppowderImg,
    name: "Protein Powder"
  },
  {id: 3,
    seller: 'Best seller',
    product:  WorkoutImg,
    name: "Pre Workout"
  },

]
export default navLinksData;