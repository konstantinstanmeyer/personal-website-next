import Links from "./links";

export default function Layout({ children }){
    return(
        <>
            <main>{children}</main>
            <Links />
        </>
    )
}