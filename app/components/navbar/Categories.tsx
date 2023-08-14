"use client"
import Container from '../Container'
import {TbBeach,TbMountain,TbPool} from 'react-icons/tb'
import {GiWindmill,GiIsland, GiBoatFishing, GiCastle, GiForestCamp, GiCaveEntrance, GiCactus, GiBarn} from 'react-icons/gi'
import {MdOutlineVilla} from 'react-icons/md'
import CategoryBox from '../CategoryBox'
import { usePathname, useSearchParams } from 'next/navigation'
import {FaSkiing} from 'react-icons/fa'
import {BsSnow} from 'react-icons/bs'
import {IoDiamond} from 'react-icons/io5'

export const categories = [
    {
        label: 'Beach',
        icon: TbBeach,
        description: 'This propery is too close to the beach'
    },
    {
        label: 'Windmills',
        icon: GiWindmill,
        description: 'This propery has windmills'
    },
    {
        label: 'Modern',
        icon: MdOutlineVilla,
        description: 'This propery is modern'
    },
    {
        label: 'Countryside',
        icon: TbMountain,
        description: 'This propery is in the countryside'
    },
    {
        label: 'Pools',
        icon: TbPool,
        description: 'This propery has a pool!!'
    },
    {
        label: 'Islands',
        icon: GiIsland,
        description: 'This propery is on an island!!'
    },
    {
        label: 'Lake',
        icon: GiBoatFishing,
        description: 'This propery is close to a lake!!'
    },
    {
        label: 'Skiing',
        icon: FaSkiing,
        description: 'This propery has skiing activities!!'
    },
    {
        label: 'Castles',
        icon: GiCastle,
        description: 'This propery is in a castle'
    },
    {
        label: 'Camping',
        icon: GiForestCamp,
        description: 'This propery has camping activities'
    },
    {
        label: 'Arctic',
        icon: BsSnow,
        description: 'This propery has camping activities'
    },
    {
        label: 'Cave',
        icon: GiCaveEntrance,
        description: 'This propery is in a cAVE'
    },
    {
        label: 'Desert',
        icon: GiCactus,
        description: 'This propery is in a desert'
    },
    {
        label: 'Barns',
        icon: GiBarn,
        description: 'This propery is in the barn'
    },
    {
        label: 'Lux',
        icon: IoDiamond,
        description: 'This propery is luxurious'
    }
]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category')
    const pathname = usePathname()

    const isMainPage = pathname === '/';
    if(!isMainPage) {
        return null
    }
  return (
    <div>
        <Container>
            <div className='pt-4 flex flex-row items-center justify-between overflow-x-auto'>
            {categories.map((item)=> (
                <CategoryBox key={item.label} label={item.label} selected={category===item.label} icon={item.icon}/>
            ))}
            </div>
        </Container>
    </div>
  )
}

export default Categories