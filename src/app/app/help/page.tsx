import Image from "next/image";
import Fadein from "@/components/fadein";
import MenuIcon from '@mui/icons-material/Menu';

const page = () => {
    return (
        <div className={' text-black w-full h-fit px-[250px] py-[10px] flex flex-col '}>
            <Fadein autoPlay={true} identifier={'id1'} direction={'rtl'}>
                <div className={'flex flex-col'}>
                    <h1 className={'font-bold text-[50px] mb-[50px] hover:scale-105 transition-all duration-150'}>
                        How to update the content
                    </h1>
                    <p className={'hover:scale-105 transition-all duration-150 w-[80%] ml-auto text-[20px]  text-justify'}>
                        You can press the  <MenuIcon /> at the top left corner to find the main menu of the admin panel. Select <span className={'font-bold'}>Manage Content</span> option from the menu and go through the content and you can easily update the content of each section one by one.
                    </p>
                    <Image className={'hover:scale-105 transition-all duration-150 w-[50%] mx-auto mt-[50px]'} width={100} height={50} src={'/images/aboutus.svg'}
                           alt={'About us'}></Image>
                </div>
            </Fadein>

            <Fadein identifier={'id1'} direction={'ltr'}>
                <div className={'flex flex-col'}>
                    <h1 className={'hover:scale-105 transition-all duration-150 ml-auto font-bold text-[50px] mt-[100px] mb-[50px]'}>
                        What is a leaflet
                    </h1>
                    <p className={'hover:scale-105 transition-all duration-150 w-[80%] text-[20px]  text-justify'}>
                        Leaflet act as the hero image of the main MLT website. You can design your own custom leaflets
                        in both <span className={'font-bold'}>Landscape</span> and <span
                        className={'font-bold'}>portrait</span> orientations. Your should also submit a pdf version of
                        the leaflet, so that the system will automatically email these leaflets to the subscribed
                        students. To do this
                        you can simply go to the <span className={'font-bold'}>Leaflets</span> section of the main menu and follow the instructions.
                    </p>
                    <Image className={'hover:scale-105 transition-all duration-150 w-[50%] mx-auto mt-[50px]'} width={100} height={50} src={'/images/contactus.svg'}
                           alt={'About us'}></Image>
                </div>
            </Fadein>

            <Fadein identifier={'id2'} direction={'rtl'}>
                <div className={'flex flex-col'}>
                    <h1 className={'hover:scale-105 transition-all duration-150 font-bold text-[50px] mb-[50px]'}>
                        What does student data section do?
                    </h1>
                    <p className={'hover:scale-105 transition-all duration-150 w-[80%] ml-auto text-[20px]  text-justify'}>
                        This section allows you to download the data provided by the site visitors in CSV file format. This data may include student names, email addresses, home addresses and other information related to them.
                        Since they can contain sensitive information related to the possible future students, please make sure to handle them securely and ethically
                        and always follow legal and ethical standards as much as possible.
                    </p>
                    <Image className={'hover:scale-105 transition-all duration-150 w-[50%] mx-auto mt-[50px]'} width={100} height={50} src={'/images/joinus.svg'}
                           alt={'About us'}></Image>
                </div>
            </Fadein>
        </div>
    )
}

export default page;