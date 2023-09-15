'use client';

import React, { Fragment, useState } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import {
	Bars3BottomLeftIcon,
	BellIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline';

import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Image from 'next/image';
// import Logo from '@/assets/Logo.svg';
import navItems from '@/lib/sidebar-navlinks';

const userNavigation = [
	{ name: 'Your Profile', href: 'profile' },
	{ name: 'Settings', href: 'settings' },
	{ name: 'Sign out', href: 'signin' },
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

export default function Sidebar() {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	let pathname = usePathname() || '/';
	if (pathname.includes('/dashboard/')) {
		pathname = '/dashboard';
	}

	return (
		<div>
			<Transition.Root show={sidebarOpen} as={Fragment}>
				<Dialog
					as='div'
					className='relative z-40 md:hidden'
					onClose={setSidebarOpen}
				>
					<Transition.Child
						as={Fragment}
						enter='transition-opacity ease-linear duration-300'
						enterFrom='opacity-0'
						enterTo='opacity-100'
						leave='transition-opacity ease-linear duration-300'
						leaveFrom='opacity-100'
						leaveTo='opacity-0'
					>
						<div className='fixed inset-0 bg-gray-600/75' />
					</Transition.Child>

					<div className='fixed inset-0 z-40 flex'>
						<Transition.Child
							as={Fragment}
							enter='transition ease-in-out duration-300 transform'
							enterFrom='-translate-x-full'
							enterTo='translate-x-0'
							leave='transition ease-in-out duration-300 transform'
							leaveFrom='translate-x-0'
							leaveTo='-translate-x-full'
						>
							<Dialog.Panel className='relative flex w-full max-w-xs flex-1 flex-col bg-sidebar pb-4 pt-5'>
								<Transition.Child
									as={Fragment}
									enter='ease-in-out duration-300'
									enterFrom='opacity-0'
									enterTo='opacity-100'
									leave='ease-in-out duration-300'
									leaveFrom='opacity-100'
									leaveTo='opacity-0'
								>
									<div className='absolute right-0 top-0 -mr-12 pt-2'>
										<button
											type='button'
											className='ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
											onClick={() => setSidebarOpen(false)}
										>
											<span className='sr-only'>Close sidebar</span>
											<XMarkIcon
												className='h-6 w-6 text-white'
												aria-hidden='true'
											/>
										</button>
									</div>
								</Transition.Child>
								<div className='flex shrink-0 items-center px-4'>
									{/* <Image
										className='h-8 w-auto'
										src={Logo}
										alt=' Logo'
										height={32}
										width={32}
									/> */}
								</div>
								<div className='mt-10 h-0 flex-1 overflow-y-auto'>
									<nav className='space-y-5 px-6 '>
										{Object.entries(navItems).map(
											([path, { name, icon: Icon }]) => {
												const isActive = path === pathname;
												return (
													<Link
														href={path}
														key={path}
														className={clsx(
															'transition-all text-indigo-100 hover:bg-secondary hover:rounded-md flex align-middle items-center space-x-3 py-1 px-4',
															{
																'text-secondary hover:bg-secondary hover:text-white':
																	!isActive,
																'font-bold bg-secondary rounded-md text-white':
																	isActive,
															}
														)}
													>
														<Icon />
														<span className='relative px-[10px] py-[5px]'>
															{name}
															{path === pathname ? (
																<div className='absolute inset-0 z-[-1] rounded-md bg-neutral-100 dark:bg-neutral-800' />
															) : null}
														</span>
													</Link>
												);
											}
										)}
									</nav>
								</div>
							</Dialog.Panel>
						</Transition.Child>
						<div className='w-14 shrink-0' aria-hidden='true'>
							{/* Dummy element to force sidebar to shrink to fit close icon */}
						</div>
					</div>
				</Dialog>
			</Transition.Root>

			{/* Static sidebar for desktop */}
			<div className='hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col'>
				{/* Sidebar component, swap this element with another sidebar if you like */}
				<div className='flex grow flex-col overflow-y-auto bg-sidebar pt-5'>
					<div className='flex shrink-0 items-center px-10'>
						{/* <Image
							className='h-8 w-auto'
							src={Logo}
							alt='Your Company'
							height={32}
							width={32}
						/> */}
					</div>
					<div className='mt-10 flex flex-1 flex-col'>
						<nav className='flex-1 space-y-5 px-6 pb-4'>
							{Object.entries(navItems).map(([path, { name, icon: Icon }]) => {
								const isActive = path === pathname;
								return (
									<Link
										href={path}
										key={path}
										className={clsx(
											'transition-all text-indigo-100 hover:bg-secondary hover:rounded-md flex align-middle items-center space-x-3 py-1 px-4',
											{
												'text-secondary hover:bg-secondary hover:text-white':
													!isActive,
												'font-bold bg-secondary rounded-md text-white':
													isActive,
											}
										)}
									>
										<Icon />
										<span className='relative px-[10px] py-[5px]'>
											{name}
											{path === pathname ? (
												<div className='absolute inset-0 z-[-1] rounded-md bg-neutral-100 dark:bg-neutral-800' />
											) : null}
										</span>
									</Link>
								);
							})}
						</nav>
					</div>
				</div>
			</div>
			<div className='flex flex-1 flex-col md:pl-64'>
				<div className='sticky top-0 z-10 flex h-16 shrink-0 bg-white shadow'>
					<button
						type='button'
						className='border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden'
						onClick={() => setSidebarOpen(true)}
					>
						<span className='sr-only'>Open sidebar</span>
						<Bars3BottomLeftIcon className='h-6 w-6' aria-hidden='true' />
					</button>
					<div className='flex flex-1 justify-between px-4'>
						<div className='flex flex-1'>
							<form className='flex w-full md:ml-0' action='#' method='GET'>
								<div className='relative w-full text-gray-400 focus-within:text-gray-600'>
									<div className='pointer-events-none absolute inset-y-0 left-0 flex items-center'>
										<MagnifyingGlassIcon
											className='h-5 w-5'
											aria-hidden='true'
										/>
									</div>
									<input
										id='search-field'
										className='block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-900 placeholder:text-gray-500 focus:border-transparent focus:outline-none focus:ring-0 focus:placeholder:text-gray-400 sm:text-sm'
										placeholder='Search'
										type='search'
										name='search'
									/>
								</div>
							</form>
						</div>
						<div className='ml-4 flex items-center md:ml-6'>
							<button
								type='button'
								className='rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
							>
								<span className='sr-only'>View notifications</span>
								<BellIcon className='h-6 w-6' aria-hidden='true' />
							</button>

							{/* Profile dropdown */}
							<Menu as='div' className='relative ml-3'>
								<div>
									<Menu.Button className='flex max-w-xs items-center rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'>
										<span className='sr-only'>Open user menu</span>
										<Image
											className='h-8 w-8 rounded-full'
											src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
											alt=''
											height={32}
											width={32}
										/>
									</Menu.Button>
								</div>
								<Transition
									as={Fragment}
									enter='transition ease-out duration-100'
									enterFrom='transform opacity-0 scale-95'
									enterTo='transform opacity-100 scale-100'
									leave='transition ease-in duration-75'
									leaveFrom='transform opacity-100 scale-100'
									leaveTo='transform opacity-0 scale-95'
								>
									<Menu.Items className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none'>
										{userNavigation.map((item) => (
											<Menu.Item key={item.name}>
												{({ active }) => (
													<Link
														href={item.href}
														className={classNames(
															active ? 'bg-gray-100' : '',
															'block px-4 py-2 text-sm text-gray-700'
														)}
													>
														{item.name}
													</Link>
												)}
											</Menu.Item>
										))}
									</Menu.Items>
								</Transition>
							</Menu>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
