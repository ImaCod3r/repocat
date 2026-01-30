import LogoImage from "@/assets/logo.png";

function Logo() {
    return (
        <div>
            <img src={LogoImage} alt="RepoCat logo" width={80} height={80} />
        </div>
    )
}

export default Logo;