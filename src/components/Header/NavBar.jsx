
import { useState } from "react"
import styles from './NavBar.module.css';


export default function NavBar(){

 return (

<main className={styles.NavBar}>
<nav>
<ul class="nav nav-tabs">
    <li class="nav-item"><a class="nav-link" href="/">HOME</a></li>
    <li class="nav-item"><a class="nav-link" href="/goals">JOURNAL</a></li>
</ul>
</nav>
</main>
 )
}


