"use client"
import Image from 'next/image'
import CustomButton from './CustomButton'
const MainPage = () => {
    const handleScroll = () => {
        console.log('scrolling')
        window.scrollTo(0, 0)
    }
    return (
        <div className='hero'>
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                    Find book, or rent a car - quickly and easily
                </h1>
                <p className="hero__subtitle">
                    Streamline your car rental business with our all-in-one platform.
                </p>

                <CustomButton
                    title="Explore Cars"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>
        </div>
    )
}

export default MainPage