'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Hero from '@/components/landingpage/Hero/Hero';
import MainFeatures from '@/components/landingpage/Features/MainFeatures';
import ConvertCryptoFeature from '@/components/landingpage/Features/ConvertCryptoFeature';
import PaymentFeature from '@/components/landingpage/Features/PaymentFeature';
import ContactUs from '@/components/landingpage/ContactUs/ContactUs';
import PayrollFeature from '@/components/landingpage/Features/PayrollFeature';
import Footer from '@/components/landingpage/Footer/Footer';
import DashboardPage from '@/app/dashboard/page';
import AppLayout from '@/app/appLayout';

function Home() {
	return (
		// <div>
		// 	<section
		// 		id='hero'
		// 		className=' h-full bg-hero-desktop-bg bg-cover bg-center bg-no-repeat '
		// 	>
		// 		<Hero />
		// 	</section>
		// 	<section id='features'>
		// 		<MainFeatures />
		// 	</section>
		// 	<motion.section
		// 		initial={{ opacity: 0 }}
		// 		viewport={{ once: true }}
		// 		whileInView={{ opacity: 1 }}
		// 		transition={{
		// 			duration: 0.3,
		// 			delay: 0.8,
		// 		}}
		// 	>
		// 		<ConvertCryptoFeature />
		// 	</motion.section>
		// 	<motion.section
		// 		initial={{ opacity: 0 }}
		// 		viewport={{ once: true }}
		// 		whileInView={{ opacity: 1 }}
		// 		transition={{
		// 			duration: 0.3,
		// 			delay: 0.8,
		// 		}}
		// 		className='bg-bg-payment  bg-cover bg-center bg-no-repeat'
		// 	>
		// 		<PaymentFeature />
		// 	</motion.section>
		// 	<motion.section
		// 		initial={{ opacity: 0 }}
		// 		viewport={{ once: true }}
		// 		whileInView={{ opacity: 1 }}
		// 		transition={{
		// 			duration: 0.3,
		// 			delay: 0.8,
		// 		}}
		// 		className='bg-cover bg-left bg-no-repeat'
		// 	>
		// 		<PayrollFeature />
		// 	</motion.section>
		// 	<motion.section
		// 		initial={{ opacity: 0 }}
		// 		viewport={{ once: true }}
		// 		whileInView={{ opacity: 1 }}
		// 		transition={{
		// 			duration: 0.3,
		// 			delay: 0.8,
		// 		}}
		// 		id='contact'
		// 	>
		// 		<ContactUs />
		// 	</motion.section>
		// 	<motion.footer
		// 		initial={{ opacity: 0 }}
		// 		viewport={{ once: true }}
		// 		whileInView={{ opacity: 1 }}
		// 		transition={{
		// 			duration: 0.3,
		// 			delay: 0.8,
		// 		}}
		// 		className='bg-[#F6E7FF]'
		// 	>
		// 		<Footer />
		// 	</motion.footer>
		// </div>
		<div>
			< AppLayout />
		</div>
	);
}

export default Home;
