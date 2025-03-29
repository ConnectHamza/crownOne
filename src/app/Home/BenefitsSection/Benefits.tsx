import React from 'react'
import GradientContainer from '../../../../components/GradientContainer/GradientContainer'
import FinancesIcon from '../../../../public/Assets/icons/Manage-Finances-Seamlessly.svg'
import ScanIcon from '../../../../public/Assets/icons/Scan-Smart.svg'
import SaveIcon from '../../../../public/Assets/icons/Save-big.svg'
import SpinIcon from '../../../../public/Assets/icons/SPin-and-win.svg'

const Benefits = () => {
    return (
        <div className="w-full flex justify-center md:px-10 px-5 md:py-40 py-20">
            <div className="w-lg">
                <h2 className='heading2 text-black-100 text-center' data-aos-desktop="fade-up" data-aos-mobile="fade-up">Unlock Endless Benefits</h2>
                <div className="flex flex-col md:flex-row justify-center gap-5 mt-10">
                    <GradientContainer
                        imageSrc={FinancesIcon}
                        title="Manage Finances Seamlessly"
                        description="Track, transfer, and save your points effortlessly with our all-in-one Cash Wallet."
                        gradient="linear-gradient(180deg, #FFF1F1 0%, #f7f7f7 100%)"
                        width='50%'
                        aos="fade-right"
                    />
                    <GradientContainer
                        imageSrc={ScanIcon}
                        title="Scan Smart"
                        description="Verify product authenticity instantly using QR Scan technology."
                        gradient="linear-gradient(180deg, #FBFEE7 0%, #f7f7f7 100%)"
                        width='50%'
                        aos="fade-left"
                    />                   
                </div>
                <div className="flex flex-col md:flex-row justify-center gap-5 mt-5">
                    <GradientContainer
                        imageSrc={SaveIcon}
                        title="Save Big"
                        description="Enjoy exclusive deals on bundle buys and exciting cashback rewards."
                        gradient="linear-gradient(180deg, #FCF7EA 0%, #f7f7f7 100%)"
                        width='40%'
                        aos="fade-right"
                    />
                    <GradientContainer
                        imageSrc={SpinIcon}
                        title="Spin & Win"
                        description="Get amazing prizes and perks with just a few taps."
                        gradient="linear-gradient(180deg, #F1F2FC 0%, #f7f7f7 100%)"
                        width='60%'
                        aos="fade-left"
                    />                   
                </div>
            </div>
        </div>
    )
}

export default Benefits