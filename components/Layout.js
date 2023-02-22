import Links from "./Links";

export default function Layout({ children }){
    return(
        <>
            <main>{children}</main>
            <Links />
        </>
    )
}