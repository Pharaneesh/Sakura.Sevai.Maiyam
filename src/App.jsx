import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function SakuraSevaiMayyam() {
    const [openDonate, setOpenDonate] = useState(false);
    const initiatives = [{
            title: 'Rural Education',
            description: 'Providing educational support, school kits, and scholarships for underprivileged Poor children.',
            image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop'
        },
        {
            title: 'Healthcare Camps',
            description: 'Free medical camps, medicine distribution, and health awareness programs across villages.',
            image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1200&auto=format&fit=crop'
        },
        {
            title: 'Food & Shelter',
            description: 'Supporting poor families, elderly citizens, and daily wage workers with essential resources.',
            image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop'
        }
    ];

    return ( <
        div className = "bg-white text-gray-900 w-full" >
        <
        style > { `html, body, #root { margin: 0; padding: 0; width: 100%; overflow-x: hidden; } ` } < /style> { /* Navbar */ } <
        header className = "fixed top-0 left-0 right-0 z-50 bg-black/75 backdrop-blur-xl border-b border-white/10 shadow-lg" >
        <
        div className = "max-w-[1400px] mx-auto px-4 lg:px-6 py-3 flex items-center justify-between" >

        { /* Logo + Title */ } <
        a href = "#home"
        className = "flex items-center gap-3 cursor-pointer" >
        <
        div className = "w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center text-lg shadow-lg" > 🌸
        <
        /div> <
        div className = "leading-tight" >
        <
        h1 className = "text-3xl lg:text-4xl font-black tracking-tight" >
        <
        span className = "bg-gradient-to-r from-white via-pink-200 to-pink-500 bg-clip-text text-transparent" >
        Sakura Sevai Maiyam <
        /span> <
        p className = "text-gray-400 text-xs mt-1" >
        Trust
        for Social Welfare <
        /p> <
        /h1>

        <
        /div> <
        /a>

        { /* Navigation */ } <
        nav className = "hidden md:flex items-center gap-10 text-gray-300 font-medium" >
        <
        a href = "#about"
        className = "hover:text-pink-400 transition-colors" > About < /a> <
        a href = "#initiatives"
        className = "hover:text-pink-400 transition-colors" > Initiatives < /a> <
        a href = "#impact"
        className = "hover:text-pink-400 transition-colors" > Impact < /a> <
        a href = "#contact"
        className = "hover:text-pink-400 transition-colors" > Contact < /a> <
        /nav>

        { /* Donate Button */ } <
        button onClick = {
            () => setOpenDonate(true) }
        className = "bg-gradient-to-r from-pink-500 to-rose-600 text-white px-5 py-2.5 rounded-xl font-semibold shadow-lg hover:scale-105 transition-all" >
        Donate Now <
        /button>

        <
        AnimatePresence > {
            openDonate && ( <
                motion.div initial = {
                    { opacity: 0 } }
                animate = {
                    { opacity: 1 } }
                exit = {
                    { opacity: 0 } }
                className = "fixed inset-0 z-[100] bg-black/70 backdrop-blur-md flex items-start justify-center pt-8 px-6" >
                <
                motion.div initial = {
                    { y: 60, opacity: 0, scale: 0.95 } }
                animate = {
                    { y: 0, opacity: 1, scale: 1 } }
                exit = {
                    { y: 60, opacity: 0, scale: 0.95 } }
                transition = {
                    { duration: 0.3 } }
                className = "w-full max-w-xl bg-white rounded-[36px] shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto" >
                { /* Header */ } <
                div className = "bg-gradient-to-r from-pink-500 to-rose-600 px-8 py-6 text-white" >
                <
                div className = "flex items-center justify-between" >
                <
                div >
                <
                h2 className = "text-3xl font-black" > Support Our Mission < /h2> <
                p className = "mt-2 text-pink-100" >
                Your support brings hope, care, and opportunities to families in need. <
                /p> <
                /div> <
                button onClick = {
                    () => setOpenDonate(false) }
                className = "text-4xl leading-none hover:scale-110 transition-transform" >
                ×
                <
                /button> <
                /div> <
                /div>

                { /* Body */ } <
                div className = "p-8" > { /* Donation Amounts */ } <
                div className = "grid grid-cols-2 gap-4" > {
                    [500, 1000, 2500, 5000].map((amount) => ( <
                        button key = { amount }
                        className = "border border-pink-200 rounded-2xl py-5 text-xl font-bold hover:bg-pink-50 hover:border-pink-400 transition-all" >
                        ₹{ amount } <
                        /button>
                    ))
                } <
                /div>

                { /* Custom Amount */ } <
                input type = "number"
                placeholder = "Enter Custom Amount"
                className = "w-full mt-6 px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500" /
                >

                { /* Donor Details */ } <
                div className = "mt-6 space-y-4" >
                <
                input type = "text"
                placeholder = "Full Name"
                className = "w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500" / >
                <
                input type = "email"
                placeholder = "Email Address"
                className = "w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500" / >
                <
                input type = "text"
                placeholder = "Phone Number"
                className = "w-full px-5 py-4 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500" / >
                <
                /div>

                { /* Payment Methods */ } <
                div className = "mt-8 grid gap-4" >
                <
                button className = "w-full bg-gradient-to-r from-pink-500 to-rose-600 text-white py-4 rounded-2xl text-lg font-semibold shadow-lg hover:scale-[1.02] transition-all" >
                Pay via UPI <
                /button> <
                button className = "w-full border border-gray-300 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-50 transition-all" >
                Pay via Debit / Credit Card <
                /button> <
                button className = "w-full border border-gray-300 py-4 rounded-2xl text-lg font-semibold hover:bg-gray-50 transition-all" >
                Net Banking <
                /button> <
                /div>

                { /* Footer Buttons */ } <
                div className = "flex gap-4 mt-8" >
                <
                button onClick = {
                    () => setOpenDonate(false) }
                className = "w-1/2 border border-gray-300 py-4 rounded-2xl font-semibold hover:bg-gray-100 transition-all" >
                Cancel <
                /button> <
                button className = "w-1/2 bg-black text-white py-4 rounded-2xl font-semibold hover:bg-gray-900 transition-all" >
                Proceed Payment <
                /button> <
                /div>

                <
                p className = "mt-6 text-sm text-gray-500 text-center leading-7" >
                Your contribution directly supports education programs, healthcare services, food assistance, emergency relief efforts, and humanitarian initiatives
                for communities in need. <
                /p> <
                /div> <
                /motion.div> <
                /motion.div>
            )
        } <
        /AnimatePresence> <
        /div> <
        /header>

        { /* Hero */ } <
        section id = "home"
        className = "relative min-h-screen flex items-center bg-black text-white overflow-hidden"
        style = {
            { width: '100vw', position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' } } >
        <
        div className = "absolute inset-0 w-full h-full" >
        <
        img src = "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop"
        alt = "Poor community support"
        className = "w-full h-full object-cover object-center opacity-40" /
        >
        <
        div className = "absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/40" > < /div> <
        /div>

        <
        div className = "relative w-full px-6 lg:px-14 pt-24 lg:pt-44 grid lg:grid-cols-2 gap-16 items-center" >
        <
        div >
        <
        span className = "inline-block px-5 py-2 rounded-full bg-white/10 border border-white/10 text-pink-300 backdrop-blur-md text-sm tracking-wide" >
        Serving Humanity With Compassion & Hope <
        /span>

        <
        h1 className = "mt-8 text-6xl lg:text-7xl font-black leading-tight tracking-tight" >
        <
        span className = "block text-white drop-shadow-[0_4px_20px_rgba(255,255,255,0.25)]" >
        Creating Hope <
        /span> <
        span className = "block text-white drop-shadow-[0_4px_20px_rgba(255,255,255,0.25)]" >
        Changing Lives <
        /span> <
        span className = "block mt-4 bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 bg-clip-text text-transparent" >
        For Families <
        /span> <
        span className = "block bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 bg-clip-text text-transparent" >
        In Need <
        /span> <
        /h1>

        <
        p className = "mt-8 text-xl text-gray-300 leading-9 max-w-2xl" >
        SakuraSevaiMaiyam is a humanitarian trust committed to uplifting underprivileged families, supporting children 's education, helping elderly citizens, and providing essential care for communities in need across India. Through compassion, service, and meaningful initiatives, we strive to build a future filled with hope, dignity, and opportunity for every life we touch. <
        /p>

        <
        div className = "mt-10 flex flex-wrap gap-5" >
        <
        a href = "#initiatives"
        className = "bg-gradient-to-r from-pink-500 to-rose-600 px-8 py-5 rounded-2xl text-lg font-semibold shadow-2xl hover:scale-105 transition-all" >
        Explore Our Work <
        /a> <
        a href = "#contact"
        className = "border border-white/20 bg-white/10 backdrop-blur-md px-8 py-5 rounded-2xl text-lg font-semibold hover:bg-white/20 transition-all" >
        Become Volunteer <
        /a> <
        /div>

        <
        div className = "grid grid-cols-3 gap-6 mt-16" >
        <
        div >
        <
        h2 className = "text-5xl font-black !text-white" > 25 K + < /h2> <
        p className = "mt-3 !text-gray-200" > Families Supported < /p> <
        /div> <
        div >
        <
        h2 className = "text-5xl font-black !text-white" > 50 + < /h2> <
        p className = "mt-3 !text-gray-200" > Volunteers < /p> <
        /div> <
        div >
        <
        h2 className = "text-5xl font-black !text-white" > 50 + < /h2> <
        p className = "mt-3 !text-gray-200" > Community Programs < /p> <
        /div> <
        /div> <
        /div>

        <
        div className = "relative hidden lg:block -mt-50" >
        <
        div className = "border border-white/10 rounded-[40px] shadow-2xl" >
        <
        img src = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop"
        alt = "poor people support"
        className = "rounded-3xl h-[650px] w-full object-cover object-[center_15%]" /
        >
        <
        /div> <
        /div> <
        /div> <
        /section>

        { /* About */ } <
        section id = "about"
        className = "scroll-mt-24 py-20 bg-white -mt-8" >
        <
        div className = "max-w-[1400px] mx-auto px-4 lg:px-6 grid lg:grid-cols-2 gap-20 items-center" >
        <
        div >
        <
        img src = "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1600&auto=format&fit=crop"
        alt = "Trust work"
        className = "rounded-[40px] shadow-2xl" /
        >
        <
        /div>

        <
        div >
        <
        span className = "text-pink-600 font-semibold tracking-widest uppercase" > Who We Are < /span> <
        h2 className = "mt-6 text-5xl font-black leading-tight" >
        Driven By Compassion, Guided By Humanity <
        /h2> <
        p className = "mt-8 text-lg leading-9 text-gray-600" >
        Our mission is to create meaningful social impact through education support, healthcare initiatives, food assistance, emergency relief, and community welfare programs.We believe every individual deserves care, respect, and the opportunity to live with dignity regardless of their background or financial condition. <
        /p> <
        div className = "grid grid-cols-2 gap-6 mt-12" >
        <
        div className = "bg-gray-50 rounded-3xl p-8 shadow-sm" >
        <
        h3 className = "text-4xl font-bold text-pink-600" > 2 + < /h3> <
        p className = "mt-3 text-gray-600" > Years of Service < /p> <
        /div> <
        div className = "bg-gray-50 rounded-3xl p-8 shadow-sm" >
        <
        h3 className = "text-4xl font-bold text-pink-600" > 2 + < /h3> <
        p className = "mt-3 text-gray-600" > District Reach < /p> <
        /div> <
        /div> <
        /div> <
        /div> <
        /section>

        { /* Initiatives */ } <
        section id = "initiatives"
        className = "scroll-mt-24 py-20 bg-gray-50" >
        <
        div className = "max-w-[1400px] mx-auto px-4 lg:px-6" >
        <
        div className = "text-center max-w-4xl mx-auto" >
        <
        span className = "text-pink-600 font-semibold tracking-widest uppercase" > Community Initiatives < /span> <
        h2 className = "mt-6 text-5xl font-black" > Transforming Lives Through Social Impact < /h2> <
        p className = "mt-6 text-lg text-gray-600 leading-8" >
        Our initiatives are focused on creating lasting change by supporting vulnerable communities with education, healthcare, food security, and social welfare programs. <
        /p> <
        /div>

        <
        div className = "grid lg:grid-cols-3 gap-10 mt-8" > {
            initiatives.map((initiative, index) => ( <
                div key = { index }
                className = "group bg-white rounded-[32px] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2" >
                <
                div className = "overflow-hidden" >
                <
                img src = { initiative.image }
                alt = { initiative.title }
                className = "h-72 w-full object-cover group-hover:scale-110 transition-transform duration-700" /
                >
                <
                /div> <
                div className = "p-8" >
                <
                h3 className = "text-3xl font-bold" > { initiative.title } < /h3> <
                p className = "mt-5 text-gray-600 leading-8" > { initiative.description } < /p> <
                button className = "mt-8 text-pink-600 font-semibold hover:translate-x-2 transition-transform" >
                Learn More→ <
                /button> <
                /div> <
                /div>
            ))
        } <
        /div> <
        /div> <
        /section>

        { /* Impact Banner */ } <
        section id = "impact"
        className = "scroll-mt-24 py-20 bg-black text-white relative overflow-hidden" >
        <
        div className = "absolute inset-0 opacity-20" >
        <
        img src = "https://images.unsplash.com/photo-1469571486292-b53601020f1b?q=80&w=1600&auto=format&fit=crop"
        alt = "Impact"
        className = "w-full h-full object-cover" /
        >
        <
        /div> <
        div className = "relative max-w-6xl mx-auto px-6 text-center" >
        <
        h2 className = "text-6xl font-black !text-white" >
        Every Contribution Creates <
        span className = "block text-transparent bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text" >
        Real Change <
        /span> <
        /h2> <
        p className = "mt-10 text-xl text-gray-300 leading-9 max-w-4xl mx-auto" >
        SakuraSevaiMaiyam is a humanitarian trust committed to uplifting underprivileged families, supporting children 's education, helping elderly citizens, and providing essential care for communities in need across India. Through compassion, service, and meaningful initiatives, we strive to build a future filled with hope, dignity, and opportunity for every life we touch. <
        /p> <
        button className = "mt-12 bg-gradient-to-r from-pink-500 to-rose-600 px-10 py-5 rounded-2xl text-lg font-semibold shadow-2xl hover:scale-105 transition-all" >
        Support SakuraSevaiMaiyam <
        /button> <
        /div> <
        /section>

        { /* Contact */ } <
        section id = "contact"
        className = "scroll-mt-24 py-20 bg-white" >
        <
        div className = "max-w-[1400px] mx-auto px-4 lg:px-6 grid lg:grid-cols-2 gap-20" >
        <
        div >
        <
        span className = "text-pink-600 font-semibold tracking-widest uppercase" > Contact Us < /span> <
        h2 className = "mt-6 text-5xl font-black" > Let 's Build Hope Together</h2> <
        p className = "mt-8 text-lg text-gray-600 leading-9" >
        Every act of kindness creates a ripple of change.Together, we can empower families, support children 's dreams, provide care for the elderly, and build stronger communities through compassion and collective support. <
        /p> <
        div className = "mt-12 space-y-6 text-lg" >
        <
        p > < span className = "font-bold" > 📍Address: < /span> Usilampatti, Madurai, Tamil Nadu - 625532</p >
        <
        p > < span className = "font-bold" > 📞Phone: < /span> +91 99441 20241</p >
        <
        p > < span className = "font-bold" > ✉️Email: < /span> support@sakurasevaimaiyam.org</p >
        <
        /div> <
        /div>

        <
        div className = "bg-gray-50 rounded-[40px] p-10 shadow-xl" >
        <
        div className = "space-y-6" >
        <
        input type = "text"
        placeholder = "Your Name"
        className = "w-full px-6 py-5 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500" / >
        <
        input type = "email"
        placeholder = "Your Email"
        className = "w-full px-6 py-5 rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500" / >
        <
        textarea rows = "4"
        placeholder = "Your Message"
        className = "w-full px-5 py-3 text-sm rounded-2xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none" >
        < /textarea> <
        button className = "w-full bg-gradient-to-r from-pink-500 to-rose-600 text-white py-5 rounded-2xl text-lg font-semibold shadow-xl hover:scale-[1.02] transition-all" >
        Send Message <
        /button> <
        /div> <
        /div> <
        /div> <
        /section>

        { /* Footer */ } <
        footer className = "bg-black text-gray-400 py-10 border-t border-white/10" >
        <
        div className = "max-w-[1400px] mx-auto px-4 lg:px-6 flex flex-col md:flex-row items-center justify-between gap-6" >
        <
        div >
        <
        h3 className = "text-2xl font-bold text-white" > SakuraSevaiMaiyam < /h3> <
        p className = "mt-2" > Together, we can inspire hope, transform lives, and build a better tomorrow through compassion and service. < /p> <
        /div> <
        div className = "flex gap-8" >
        <
        a href = "#"
        className = "hover:text-white transition-colors" > Facebook < /a> <
        a href = "#"
        className = "hover:text-white transition-colors" > Instagram < /a> <
        a href = "#"
        className = "hover:text-white transition-colors" > YouTube < /a> <
        /div> <
        /div> <
        /footer> <
        /div>
    );
}