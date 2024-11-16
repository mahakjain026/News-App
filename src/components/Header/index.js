import Drawer from "../UI/drawer.tsx";

const Header =({setCategory})=>{
    return(
        <section className="flex">
            <section>
                <Drawer setCategory={setCategory} />
            </section>
            <section>
                <img src="https://i0.wp.com/newsdata.io/blog/wp-content/uploads/2023/01/logo_inshorts.png?resize=472%2C200&ssl=1" alt="logo" width={90} height={100}></img>
            </section>
        </section>
    )
}

export default Header;