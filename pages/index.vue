<template>
<div class="">
                
                <section x-data="{ mobileNavOpen: false, dropdown: false }" style="background: url('/fily-assets/gradients/gradient-header.jpg'); background-size: cover;">
                    <nav class="relative px-12 py-5">
                        <div class="flex items-center justify-between">
                            <a class="relative z-10 pr-4 lg:pr-0" href="#">
                                <img class="h-9" src="/logo.png" alt="">
                            </a>
                            <ul class="hidden xl:absolute xl:top-1/2 xl:left-1/2 xl:transform xl:-translate-y-1/2 xl:-translate-x-1/2 xl:flex lg:justify-center gap-14">
                                <li>
                                    <a href="#" x-on:mousemove="dropdown = false" class="text-lg text-white hover:text-gray-300 font-medium transition duration-200">Our features</a>
                                </li>
                                <li>
                                    <a href="#" x-on:mousemove="dropdown = false" class="text-lg text-white hover:text-gray-300 font-medium transition duration-200">How to use?</a>
                                </li>
                                <li>
                                    <a href="#" x-on:mousemove="dropdown = true" :class="{'text-gray-300': dropdown}" class="flex items-center text-lg text-white hover:text-gray-300 font-medium transition duration-200">
                                        <span class="mr-2.5">Use cases</span>
                                        <div :class="{'rotate-180': dropdown}" class="transform">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewbox="0 0 13 13" fill="none">
                                                <g>
                                                    <path d="M11.8098 3.51666C11.7362 3.43826 11.6487 3.37604 11.5523 3.33357C11.4559 3.2911 11.3525 3.26924 11.2481 3.26924C11.1436 3.26924 11.0402 3.2911 10.9438 3.33357C10.8474 3.37604 10.7599 3.43826 10.6864 3.51666L7.06305 7.34761C6.9895 7.42601 6.902 7.48824 6.8056 7.5307C6.70919 7.57317 6.60579 7.59503 6.50135 7.59503C6.39691 7.59503 6.29351 7.57317 6.19711 7.5307C6.1007 7.48824 6.0132 7.42601 5.93966 7.34761L2.31633 3.51666C2.24279 3.43826 2.15529 3.37604 2.05888 3.33357C1.96248 3.2911 1.85907 3.26924 1.75464 3.26924C1.6502 3.26924 1.5468 3.2911 1.45039 3.33357C1.35399 3.37604 1.26649 3.43826 1.19294 3.51666C1.0456 3.67338 0.962891 3.88538 0.962891 4.10636C0.962891 4.32734 1.0456 4.53934 1.19294 4.69606L4.82418 8.53537C5.26918 9.00529 5.87241 9.26924 6.50135 9.26924C7.13029 9.26924 7.73352 9.00529 8.17852 8.53537L11.8098 4.69606C11.9571 4.53934 12.0398 4.32734 12.0398 4.10636C12.0398 3.88538 11.9571 3.67338 11.8098 3.51666Z" fill="currentColor"></path>
                                                </g>
                                                <defs>
                                                    <clippath>
                                                        <rect width="12" height="12" fill="white" transform="translate(0.5 0.5)"></rect>
                                                    </clippath>
                                                </defs>
                                            </svg>
                                        </div>
                                    </a>
                                </li>
                                <li>
                                    <a href="#" x-on:mousemove="dropdown = false" class="text-lg text-white hover:text-gray-300 font-medium transition duration-200">Plans &amp; pricing</a>
                                </li>
                            </ul>
                            <div class="hidden xl:flex items-center gap-2">
                                <a class="hidden 2xl:block mr-8" href="#">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewbox="0 0 20 20" fill="none">
                                        <g clip-path="url(#clip0_231_6677)">
                                            <path d="M19.6343 17.871L15.7634 13.9984C18.6598 10.1278 17.87 4.64195 13.9994 1.74551C10.1288 -1.15092 4.64292 -0.361157 1.74649 3.50949C-1.14994 7.38013 -0.36018 12.866 3.51046 15.7624C6.61969 18.0891 10.8901 18.0891 13.9994 15.7624L17.872 19.635C18.3587 20.1216 19.1477 20.1216 19.6343 19.635C20.121 19.1483 20.121 18.3593 19.6343 17.8727L19.6343 17.871ZM8.7872 15.015C5.34716 15.015 2.55848 12.2263 2.55848 8.78623C2.55848 5.34618 5.34716 2.55751 8.7872 2.55751C12.2273 2.55751 15.0159 5.34618 15.0159 8.78623C15.0123 12.2247 12.2257 15.0113 8.7872 15.015Z" fill="#19191B"></path>
                                        </g>
                                        <defs>
                                            <clippath id="clip0_231_6677">
                                                <rect width="20" height="20" fill="white"></rect>
                                            </clippath>
                                        </defs>
                                    </svg>
                                </a>
                                <a class="inline-flex justify-center items-center text-center h-12 p-5 px-6 font-semibold text-white hover:text-black focus:text-black bg-transparent hover:bg-gray-50 focus:bg-gray-50 border border-gray-100 rounded-full focus:ring-4 focus:ring-gray-200 focus:ring-opacity-50 transition duration-200" href="#">Login</a>
                                <a class="inline-flex justify-center items-center text-center h-12 p-5 px-6 font-semibold text-white hover:text-white focus:text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 rounded-full focus:ring-4 focus:ring-blue-200 transition duration-200" href="#">Get started</a>
                            </div>
                            <a x-on:click.prevent="mobileNavOpen = !mobileNavOpen" class="flex items-center justify-center h-12 p-5 text-white border border-gray-300 xl:hidden rounded-full" href="#">
                                <svg width="20" height="16" viewbox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.75 6.75003H1.25C0.559648 6.75003 0 7.30968 0 8.00003C0 8.69038 0.559648 9.25003 1.25 9.25003H18.75C19.4404 9.25003 20 8.69038 20 8.00003C20 7.30968 19.4404 6.75003 18.75 6.75003Z" fill="currentColor"></path>
                                    <path d="M1.25 3.41669H18.75C19.4404 3.41669 20 2.85704 20 2.16669C20 1.47634 19.4404 0.916687 18.75 0.916687H1.25C0.559648 0.916687 0 1.47634 0 2.16669C0 2.85704 0.559648 3.41669 1.25 3.41669Z" fill="currentColor"></path>
                                    <path d="M18.75 12.5834H1.25C0.559648 12.5834 0 13.143 0 13.8334C0 14.5237 0.559648 15.0834 1.25 15.0834H18.75C19.4404 15.0834 20 14.5237 20 13.8334C20 13.143 19.4404 12.5834 18.75 12.5834Z" fill="currentColor"></path>
                                </svg>
                            </a>
                        </div>
                    </nav>
                    <div :class="{'hidden': !dropdown}" class="hidden absolute w-full z-40 px-8 lg:px-20 2xl:px-40">
                        <div x-on:mouseleave="dropdown = false">
                            <div class="bg-white rounded-3xl">
                                <div class="flex flex-wrap divide-x divide-gray-100">
                                    <div class="w-7/12 py-20">
                                        <div class="flex px-16 -m-8">
                                            <div class="w-1-2 p-8">
                                                <h3 class="mb-10 font-heading text-2xl font-bold">By industry</h3>
                                                <a href="#" class="mb-6 block max-w-max text-lg hover:text-gray-700 font-medium">Creative &amp; Marketing agencies</a>
                                                <a href="#" class="mb-6 block max-w-max text-lg hover:text-gray-700 font-medium">Software &amp; Engineering firms</a>
                                                <a href="#" class="mb-6 block max- w-max text-lg hover:text-gray-700 font-medium">Architecture firms</a>
                                                <a href="#" class="mb-6 block max-w-max text-lg hover:text-gray-700 font-medium">Consulting businesses</a>
                                                <a href="#" class="block max-w-max text-lg hover:text-gray-700 font-medium">Educational institutions </a>
                                            </div>
                                            <div class="w-1/2 p-8">
                                                <h3 class="mb-10 font-heading text-2xl font-bold">By role</h3>
                                                <a href="#" class="mb-2.5 block max-w-max text-lg hover:text-gray-800 font-medium">For business owners</a>
                                                <p class="text-sm mb-6 text-gray-500 font-medium">Nullam bibendum mollis enim, sed tempus lacus tempus nec. Etiam cursus nec neque at tempor.</p>
                                                <a href="#" class="mb-2.5 block max-w-max text-lg hover:text-gray-800 font-medium">For project managers</a>
                                                <p class="text-sm mb-6 text-gray-500 font-medium">Nam ut neque nisi. Vestibulum volutpat feugiat libero, tempus ligula. Nullam ut diam sit amet turpis pretium.</p>
                                                <a href="#" class="mb-2.5 block max-w-max text-lg hover:text-gray-800 font-medium">For employees</a>
                                                <p class="text-sm mb-6 text-gray-500 font-medium">Vivamus sapien enim, consequat ac volutpat a, ultrices quis enim. Cras scelerisque vel eros in consequat.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-1 py-20">
                                        <div class="px-16">
                                            <h3 class="mb-10 font-heading text-2xl font-bold">Recommended articles</h3>
                                            <div class="mb-6">
                                                <div class="flex flex-wrap items-center -m-4">
                                                    <div class="w-auto p-4">
                                                        <div class="overflow-hidden rounded-3xl" style="width: 130px;height: 130px;">
                                                            <img class="w-full h-full object-cover" src="/fily-assets/navigations/article.png" alt="">
                                                        </div>
                                                    </div>
                                                    <div class="flex-1 p-4">
                                                        <h3 class="mb-6 text-xl font-medium leading-snug">2023 Remote Work: A Comprehensive Guide</h3>
                                                        <a href="#" class="flex flex-wrap items-center text-blue-500 hover:text-blue-600">
                                                            <span class="mr-2 font-semibold transition duration-200">Read more</span>
                                                            <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M6.51348 1.71443C6.4457 1.78417 6.39189 1.86715 6.35518 1.95857C6.31846 2.04999 6.29956 2.14804 6.29956 2.24708C6.29956 2.34612 6.31846 2.44417 6.35518 2.53559C6.39189 2.62701 6.4457 2.70999 6.51348 2.77973L8.89286 5.24793L1.66071 5.24793C1.46891 5.24793 1.28495 5.32697 1.14932 5.46766C1.0137 5.60835 0.9375 5.79917 0.9375 5.99814C0.9375 6.19711 1.0137 6.38793 1.14932 6.52862C1.28495 6.66931 1.46891 6.74835 1.66071 6.74835L8.89286 6.74835L6.51348 9.21654C6.4457 9.28629 6.39189 9.36926 6.35518 9.46068C6.31846 9.5521 6.29956 9.65016 6.29956 9.74919C6.29956 9.84823 6.31846 9.94629 6.35518 10.0377C6.39189 10.1291 6.4457 10.2121 6.51348 10.2818C6.64899 10.4216 6.83229 10.5 7.02335 10.5C7.21441 10.5 7.39771 10.4216 7.53322 10.2818L10.6358 7.05593C10.9074 6.77584 11.0609 6.39543 11.0625 5.99814C11.059 5.60345 10.9057 5.22609 10.6358 4.94784L7.53322 1.72193C7.39867 1.5812 7.21591 1.50142 7.02484 1.50002C6.83378 1.49861 6.64994 1.5757 6.51348 1.71443Z" fill="currentColor"></path>
                                                            </svg> 
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mb-6">
                                                <div class="flex flex-wrap items-center -m-4">
                                                    <div class="w-auto p-4">
                                                        <div class="overflow-hidden rounded-3xl" style="width: 130px;height: 130px;">
                                                            <img class="w-full h-full object-cover" src="/fily-assets/navigations/article2.png" alt="">
                                                        </div>
                                                    </div>
                                                    <div class="flex-1 p-4">
                                                        <h3 class="mb-6 text-xl font-medium leading-snug">Mastering the Art of Project Management Success</h3>
                                                        <a href="#" class="flex flex-wrap items-center text-blue-500 hover:text-blue-600">
                                                            <span class="mr-2 font-semibold transition duration-200">Read more</span>
                                                            <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M6.51348 1.71443C6.4457 1.78417 6.39189 1.86715 6.35518 1.95857C6.31846 2.04999 6.29956 2.14804 6.29956 2.24708C6.29956 2.34612 6.31846 2.44417 6.35518 2.53559C6.39189 2.62701 6.4457 2.70999 6.51348 2.77973L8.89286 5.24793L1.66071 5.24793C1.46891 5.24793 1.28495 5.32697 1.14932 5.46766C1.0137 5.60835 0.9375 5.79917 0.9375 5.99814C0.9375 6.19711 1.0137 6.38793 1.14932 6.52862C1.28495 6.66931 1.46891 6.74835 1.66071 6.74835L8.89286 6.74835L6.51348 9.21654C6.4457 9.28629 6.39189 9.36926 6.35518 9.46068C6.31846 9.5521 6.29956 9.65016 6.29956 9.74919C6.29956 9.84823 6.31846 9.94629 6.35518 10.0377C6.39189 10.1291 6.4457 10.2121 6.51348 10.2818C6.64899 10.4216 6.83229 10.5 7.02335 10.5C7.21441 10.5 7.39771 10.4216 7.53322 10.2818L10.6358 7.05593C10.9074 6.77584 11.0609 6.39543 11.0625 5.99814C11.059 5.60345 10.9057 5.22609 10.6358 4.94784L7.53322 1.72193C7.39867 1.5812 7.21591 1.50142 7.02484 1.50002C6.83378 1.49861 6.64994 1.5757 6.51348 1.71443Z" fill="currentColor"></path>
                                                            </svg> 
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="flex flex-wrap items-center -m-4">
                                                    <div class="w-auto p-4">
                                                        <div class="overflow-hidden rounded-3xl" style="width: 130px;height: 130px;">
                                                            <img class="w-full h-full object-cover" src="/fily-assets/navigations/article3.png" alt="">
                                                        </div>
                                                    </div>
                                                    <div class="flex-1 p-4">
                                                        <h3 class="mb-6 text-xl font-medium leading-snug">Optimal Work Management Software for Firms</h3>
                                                        <a href="#" class="flex flex-wrap items-center text-blue-500 hover:text-blue-600">
                                                            <span class="mr-2 font-semibold transition duration-200">Read more</span>
                                                            <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M6.51348 1.71443C6.4457 1.78417 6.39189 1.86715 6.35518 1.95857C6.31846 2.04999 6.29956 2.14804 6.29956 2.24708C6.29956 2.34612 6.31846 2.44417 6.35518 2.53559C6.39189 2.62701 6.4457 2.70999 6.51348 2.77973L8.89286 5.24793L1.66071 5.24793C1.46891 5.24793 1.28495 5.32697 1.14932 5.46766C1.0137 5.60835 0.9375 5.79917 0.9375 5.99814C0.9375 6.19711 1.0137 6.38793 1.14932 6.52862C1.28495 6.66931 1.46891 6.74835 1.66071 6.74835L8.89286 6.74835L6.51348 9.21654C6.4457 9.28629 6.39189 9.36926 6.35518 9.46068C6.31846 9.5521 6.29956 9.65016 6.29956 9.74919C6.29956 9.84823 6.31846 9.94629 6.35518 10.0377C6.39189 10.1291 6.4457 10.2121 6.51348 10.2818C6.64899 10.4216 6.83229 10.5 7.02335 10.5C7.21441 10.5 7.39771 10.4216 7.53322 10.2818L10.6358 7.05593C10.9074 6.77584 11.0609 6.39543 11.0625 5.99814C11.059 5.60345 10.9057 5.22609 10.6358 4.94784L7.53322 1.72193C7.39867 1.5812 7.21591 1.50142 7.02484 1.50002C6.83378 1.49861 6.64994 1.5757 6.51348 1.71443Z" fill="currentColor"></path>
                                                            </svg> 
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div :class="{'hidden': !mobileNavOpen}" class="hidden fixed top-0 left-0 bottom-0 w-5/6 max-w-xs z-50">
                        <div x-on:click="mobileNavOpen = !mobileNavOpen" class="fixed inset-0 bg-black opacity-20"></div>
                        <nav class="relative p-8 w-full h-full bg-white overflow-y-auto">
                            <div class="flex flex-col justify-between h-full">
                                <div class="flex items-center justify-between mb-8">
                                    <a class="pr-4" href="#">
                                        <img class="h-8" src="/fily-assets/logos/fily-treck-black-logo.svg" alt="">
                                    </a>
                                    <a x-on:click.prevent="mobileNavOpen = !mobileNavOpen" href="#">
                                        <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 18L18 6M6 6L18 18" stroke="#252E4A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </a>
                                </div>
                                <ul class="flex flex-col gap-8 py-16">
                                    <li>
                                        <a href="#" class="text-lg text-black hover:text-gray-700 font-medium transition duration-200">Our features</a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-lg text-black hover:text-gray-700 font-medium transition duration-200">How to use?</a>
                                    </li>
                                    <li>
                                        <a href="#" class="inline-flex items-center text-lg text-black hover:text-gray-700 font-medium transition duration-200">
                                            <span class="mr-2.5">Use cases</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewbox="0 0 13 13" fill="none">
                                                <g>
                                                    <path d="M11.8098 3.51666C11.7362 3.43826 11.6487 3.37604 11.5523 3.33357C11.4559 3.2911 11.3525 3.26924 11.2481 3.26924C11.1436 3.26924 11.0402 3.2911 10.9438 3.33357C10.8474 3.37604 10.7599 3.43826 10.6864 3.51666L7.06305 7.34761C6.9895 7.42601 6.902 7.48824 6.8056 7.5307C6.70919 7.57317 6.60579 7.59503 6.50135 7.59503C6.39691 7.59503 6.29351 7.57317 6.19711 7.5307C6.1007 7.48824 6.0132 7.42601 5.93966 7.34761L2.31633 3.51666C2.24279 3.43826 2.15529 3.37604 2.05888 3.33357C1.96248 3.2911 1.85907 3.26924 1.75464 3.26924C1.6502 3.26924 1.5468 3.2911 1.45039 3.33357C1.35399 3.37604 1.26649 3.43826 1.19294 3.51666C1.0456 3.67338 0.962891 3.88538 0.962891 4.10636C0.962891 4.32734 1.0456 4.53934 1.19294 4.69606L4.82418 8.53537C5.26918 9.00529 5.87241 9.26924 6.50135 9.26924C7.13029 9.26924 7.73352 9.00529 8.17852 8.53537L11.8098 4.69606C11.9571 4.53934 12.0398 4.32734 12.0398 4.10636C12.0398 3.88538 11.9571 3.67338 11.8098 3.51666Z" fill="currentColor"></path>
                                                </g>
                                                <defs>
                                                    <clippath>
                                                        <rect width="12" height="12" fill="white" transform="translate(0.5 0.5)"></rect>
                                                    </clippath>
                                                </defs>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-lg text-black hover:text-gray-700 font-medium transition duration-200">Plans &amp; pricing</a>
                                    </li>
                                </ul>
                                <div class="flex flex-col items-center gap-2">
                                    <a class="inline-flex justify-center items-center text-center w-full h-12 p-5 px-6 font-semibold text-black hover:text-black focus:text-black bg-transparent hover:bg-white focus:bg-white border border-gray-100 rounded-full focus:ring-4 focus:ring-white focus:ring-opacity-50 transition duration-200" href="#">Login</a>
                                    <a class="inline-flex justify-center items-center text-center w-full h-12 p-5 px-6 font-semibold text-white hover:text-white focus:text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 rounded-full focus:ring-4 focus:ring-blue-200 transition duration-200" href="#">Get started</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div class="relative">
                        <div class="flex flex-wrap">
                            <div class="w-full md:w-1/2">
                                <div class="py-20 xl:pt-40 xl:pb-64 px-12 md:pr-0">
                                    <div class="relative z-10 max-w-3xl mx-auto">
                                        <h1 class="mb-12 font-heading text-4xl md:text-5xl xl:text-6xl text-white font-bold">
                <span class="bg-gradient-text" style="background-clip: text;-webkit-background-clip: text;-webkit-text-fill-color: transparent">Easy conversations</span> <span>comprehension over technical jargon</span>
                </h1>
                                        <p class="mb-16 text-xl text-white font-medium leading-relaxed">The solution for bridging comminication gap due to difference in level of expertise. Give more context, give more control and see more meaningful and deeper conversation. Understanding and clarity over multiple back and forth</p>
                                        <div class="flex flex-wrap items-center -m-4">
                                            <div class="w-auto p-4">
                                                <a class="inline-flex justify-center items-center text-center h-16 p-8 px-10 font-semibold text-white hover:text-white focus:text-white bg-pink-500 hover:bg-pink-600 focus:bg-pink-600 rounded-full focus:ring-4 focus:ring-pink-200 transition duration-200" href="#">join now!</a>
                                            </div>
                                            <div class="w-auto p-4">
                                                <a href="#" class="text-white font-medium">watch demo</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="px-12 md:px-0 pb-20 md:pb-0 md:max-w-5xl md:absolute md:right-0 md:top-1/2 md:transform md:-translate-y-1/2">
                            <div class="flex flex-wrap items-end xl:justify-end -m-2 mb-2">
                                <div class="hidden 2xl:block w-full 2xl:w-auto p-2">
                                    <img class="object-cover mx-auto rounded-3xl" style="height: 465px;" src="/fily-assets/headers/work.png" alt="">
                                </div>
                                <div class="w-full xl:w-auto p-2">
                                    <img class="object-cover mx-auto rounded-tl-3xl rounded-bl-3xl" style="height: 356px;" src="/fily-assets/headers/to-do-list.png" alt="">
                                </div>
                            </div>
                            <div class="hidden xl:flex flex-wrap xl:justify-end xl:pr-6 -m-2">
                                <div class="w-full xl:w-auto p-2">
                                    <img class="object-cover mx-auto rounded-3xl" style="height: 222px;" src="/fily-assets/headers/last-project.png" alt="">
                                </div>
                                <div class="w-full xl:w-auto p-2">
                                    <div class="overflow-hidden rounded-3xl">
                                        <img class="object-cover mx-auto rounded-3xl transform hover:scale-105 transiiton duration-500" style="height: 280px;" src="/fily-assets/headers/people.png" alt="">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                          
                <section x-data="{ mobileNavOpen: false, dropdown: false }" class="relative" style="background: url('/fily-assets/gradients/gradient-navigation.jpg') no-repeat left center;background-size: cover;">
                    
                    <div :class="{'hidden': !dropdown}" class="hidden absolute w-full z-40 px-8 lg:px-20 2xl:px-40">
                        <div x-on:mouseleave="dropdown = false">
                            <div class="bg-white rounded-3xl">
                                <div class="flex flex-wrap divide-x divide-gray-100">
                                    <div class="w-7/12 py-20">
                                        <div class="flex px-16 -m-8">
                                            <div class="w-1-2 p-8">
                                                <h3 class="mb-10 font-heading text-2xl font-bold">By industry</h3>
                                                <a href="#" class="mb-6 block max-w-max text-lg hover:text-gray-700 font-medium">Creative &amp; Marketing agencies</a>
                                                <a href="#" class="mb-6 block max-w-max text-lg hover:text-gray-700 font-medium">Software &amp; Engineering firms</a>
                                                <a href="#" class="mb-6 block max- w-max text-lg hover:text-gray-700 font-medium">Architecture firms</a>
                                                <a href="#" class="mb-6 block max-w-max text-lg hover:text-gray-700 font-medium">Consulting businesses</a>
                                                <a href="#" class="block max-w-max text-lg hover:text-gray-700 font-medium">Educational institutions </a>
                                            </div>
                                            <div class="w-1/2 p-8">
                                                <h3 class="mb-10 font-heading text-2xl font-bold">By role</h3>
                                                <a href="#" class="mb-2.5 block max-w-max text-lg hover:text-gray-800 font-medium">For business owners</a>
                                                <p class="text-sm mb-6 text-gray-500 font-medium">Nullam bibendum mollis enim, sed tempus lacus tempus nec. Etiam cursus nec neque at tempor.</p>
                                                <a href="#" class="mb-2.5 block max-w-max text-lg hover:text-gray-800 font-medium">For project managers</a>
                                                <p class="text-sm mb-6 text-gray-500 font-medium">Nam ut neque nisi. Vestibulum volutpat feugiat libero, tempus ligula. Nullam ut diam sit amet turpis pretium.</p>
                                                <a href="#" class="mb-2.5 block max-w-max text-lg hover:text-gray-800 font-medium">For employees</a>
                                                <p class="text-sm mb-6 text-gray-500 font-medium">Vivamus sapien enim, consequat ac volutpat a, ultrices quis enim. Cras scelerisque vel eros in consequat.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex-1 py-20">
                                        <div class="px-16">
                                            <h3 class="mb-10 font-heading text-2xl font-bold">Recommended articles</h3>
                                            <div class="mb-6">
                                                <div class="flex flex-wrap items-center -m-4">
                                                    <div class="w-auto p-4">
                                                        <div class="overflow-hidden rounded-3xl" style="width: 130px;height: 130px;">
                                                            <img class="w-full h-full object-cover" src="/fily-assets/navigations/article.png" alt="">
                                                        </div>
                                                    </div>
                                                    <div class="flex-1 p-4">
                                                        <h3 class="mb-6 text-xl font-medium leading-snug">2023 Remote Work: A Comprehensive Guide</h3>
                                                        <a href="#" class="flex flex-wrap items-center text-blue-500 hover:text-blue-600">
                                                            <span class="mr-2 font-semibold transition duration-200">Read more</span>
                                                            <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M6.51348 1.71443C6.4457 1.78417 6.39189 1.86715 6.35518 1.95857C6.31846 2.04999 6.29956 2.14804 6.29956 2.24708C6.29956 2.34612 6.31846 2.44417 6.35518 2.53559C6.39189 2.62701 6.4457 2.70999 6.51348 2.77973L8.89286 5.24793L1.66071 5.24793C1.46891 5.24793 1.28495 5.32697 1.14932 5.46766C1.0137 5.60835 0.9375 5.79917 0.9375 5.99814C0.9375 6.19711 1.0137 6.38793 1.14932 6.52862C1.28495 6.66931 1.46891 6.74835 1.66071 6.74835L8.89286 6.74835L6.51348 9.21654C6.4457 9.28629 6.39189 9.36926 6.35518 9.46068C6.31846 9.5521 6.29956 9.65016 6.29956 9.74919C6.29956 9.84823 6.31846 9.94629 6.35518 10.0377C6.39189 10.1291 6.4457 10.2121 6.51348 10.2818C6.64899 10.4216 6.83229 10.5 7.02335 10.5C7.21441 10.5 7.39771 10.4216 7.53322 10.2818L10.6358 7.05593C10.9074 6.77584 11.0609 6.39543 11.0625 5.99814C11.059 5.60345 10.9057 5.22609 10.6358 4.94784L7.53322 1.72193C7.39867 1.5812 7.21591 1.50142 7.02484 1.50002C6.83378 1.49861 6.64994 1.5757 6.51348 1.71443Z" fill="currentColor"></path>
                                                            </svg> 
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="mb-6">
                                                <div class="flex flex-wrap items-center -m-4">
                                                    <div class="w-auto p-4">
                                                        <div class="overflow-hidden rounded-3xl" style="width: 130px;height: 130px;">
                                                            <img class="w-full h-full object-cover" src="/fily-assets/navigations/article2.png" alt="">
                                                        </div>
                                                    </div>
                                                    <div class="flex-1 p-4">
                                                        <h3 class="mb-6 text-xl font-medium leading-snug">Mastering the Art of Project Management Success</h3>
                                                        <a href="#" class="flex flex-wrap items-center text-blue-500 hover:text-blue-600">
                                                            <span class="mr-2 font-semibold transition duration-200">Read more</span>
                                                            <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M6.51348 1.71443C6.4457 1.78417 6.39189 1.86715 6.35518 1.95857C6.31846 2.04999 6.29956 2.14804 6.29956 2.24708C6.29956 2.34612 6.31846 2.44417 6.35518 2.53559C6.39189 2.62701 6.4457 2.70999 6.51348 2.77973L8.89286 5.24793L1.66071 5.24793C1.46891 5.24793 1.28495 5.32697 1.14932 5.46766C1.0137 5.60835 0.9375 5.79917 0.9375 5.99814C0.9375 6.19711 1.0137 6.38793 1.14932 6.52862C1.28495 6.66931 1.46891 6.74835 1.66071 6.74835L8.89286 6.74835L6.51348 9.21654C6.4457 9.28629 6.39189 9.36926 6.35518 9.46068C6.31846 9.5521 6.29956 9.65016 6.29956 9.74919C6.29956 9.84823 6.31846 9.94629 6.35518 10.0377C6.39189 10.1291 6.4457 10.2121 6.51348 10.2818C6.64899 10.4216 6.83229 10.5 7.02335 10.5C7.21441 10.5 7.39771 10.4216 7.53322 10.2818L10.6358 7.05593C10.9074 6.77584 11.0609 6.39543 11.0625 5.99814C11.059 5.60345 10.9057 5.22609 10.6358 4.94784L7.53322 1.72193C7.39867 1.5812 7.21591 1.50142 7.02484 1.50002C6.83378 1.49861 6.64994 1.5757 6.51348 1.71443Z" fill="currentColor"></path>
                                                            </svg> 
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <div class="flex flex-wrap items-center -m-4">
                                                    <div class="w-auto p-4">
                                                        <div class="overflow-hidden rounded-3xl" style="width: 130px;height: 130px;">
                                                            <img class="w-full h-full object-cover" src="/fily-assets/navigations/article3.png" alt="">
                                                        </div>
                                                    </div>
                                                    <div class="flex-1 p-4">
                                                        <h3 class="mb-6 text-xl font-medium leading-snug">Optimal Work Management Software for Firms</h3>
                                                        <a href="#" class="flex flex-wrap items-center text-blue-500 hover:text-blue-600">
                                                            <span class="mr-2 font-semibold transition duration-200">Read more</span>
                                                            <svg width="12" height="12" viewbox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path d="M6.51348 1.71443C6.4457 1.78417 6.39189 1.86715 6.35518 1.95857C6.31846 2.04999 6.29956 2.14804 6.29956 2.24708C6.29956 2.34612 6.31846 2.44417 6.35518 2.53559C6.39189 2.62701 6.4457 2.70999 6.51348 2.77973L8.89286 5.24793L1.66071 5.24793C1.46891 5.24793 1.28495 5.32697 1.14932 5.46766C1.0137 5.60835 0.9375 5.79917 0.9375 5.99814C0.9375 6.19711 1.0137 6.38793 1.14932 6.52862C1.28495 6.66931 1.46891 6.74835 1.66071 6.74835L8.89286 6.74835L6.51348 9.21654C6.4457 9.28629 6.39189 9.36926 6.35518 9.46068C6.31846 9.5521 6.29956 9.65016 6.29956 9.74919C6.29956 9.84823 6.31846 9.94629 6.35518 10.0377C6.39189 10.1291 6.4457 10.2121 6.51348 10.2818C6.64899 10.4216 6.83229 10.5 7.02335 10.5C7.21441 10.5 7.39771 10.4216 7.53322 10.2818L10.6358 7.05593C10.9074 6.77584 11.0609 6.39543 11.0625 5.99814C11.059 5.60345 10.9057 5.22609 10.6358 4.94784L7.53322 1.72193C7.39867 1.5812 7.21591 1.50142 7.02484 1.50002C6.83378 1.49861 6.64994 1.5757 6.51348 1.71443Z" fill="currentColor"></path>
                                                            </svg> 
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div :class="{'hidden': !mobileNavOpen}" class="hidden fixed top-0 left-0 bottom-0 w-5/6 max-w-xs z-50">
                        <div x-on:click="mobileNavOpen = !mobileNavOpen" class="fixed inset-0 bg-black opacity-20"></div>
                        <nav class="relative p-8 w-full h-full bg-white overflow-y-auto">
                            <div class="flex flex-col justify-between h-full">
                                <div class="flex items-center justify-between mb-8">
                                    <a class="pr-4" href="#">
                                        <img class="h-8" src="/fily-assets/logos/fily-treck-black-logo.svg" alt="">
                                    </a>
                                    <a x-on:click.prevent="mobileNavOpen = !mobileNavOpen" href="#">
                                        <svg width="24" height="24" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 18L18 6M6 6L18 18" stroke="#252E4A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                        </svg>
                                    </a>
                                </div>
                                <ul class="flex flex-col gap-8 py-16">
                                    <li>
                                        <a href="#" class="text-lg text-black hover:text-gray-700 font-medium transition duration-200">Our features</a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-lg text-black hover:text-gray-700 font-medium transition duration-200">How to use?</a>
                                    </li>
                                    <li>
                                        <a x-on:mousemove="dropdown = true" href="#" class="inline-flex items-center text-lg text-black hover:text-gray-700 font-medium transition duration-200">
                                            <span class="mr-2.5">Use cases</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewbox="0 0 13 13" fill="none">
                                                <g>
                                                    <path d="M11.8098 3.51666C11.7362 3.43826 11.6487 3.37604 11.5523 3.33357C11.4559 3.2911 11.3525 3.26924 11.2481 3.26924C11.1436 3.26924 11.0402 3.2911 10.9438 3.33357C10.8474 3.37604 10.7599 3.43826 10.6864 3.51666L7.06305 7.34761C6.9895 7.42601 6.902 7.48824 6.8056 7.5307C6.70919 7.57317 6.60579 7.59503 6.50135 7.59503C6.39691 7.59503 6.29351 7.57317 6.19711 7.5307C6.1007 7.48824 6.0132 7.42601 5.93966 7.34761L2.31633 3.51666C2.24279 3.43826 2.15529 3.37604 2.05888 3.33357C1.96248 3.2911 1.85907 3.26924 1.75464 3.26924C1.6502 3.26924 1.5468 3.2911 1.45039 3.33357C1.35399 3.37604 1.26649 3.43826 1.19294 3.51666C1.0456 3.67338 0.962891 3.88538 0.962891 4.10636C0.962891 4.32734 1.0456 4.53934 1.19294 4.69606L4.82418 8.53537C5.26918 9.00529 5.87241 9.26924 6.50135 9.26924C7.13029 9.26924 7.73352 9.00529 8.17852 8.53537L11.8098 4.69606C11.9571 4.53934 12.0398 4.32734 12.0398 4.10636C12.0398 3.88538 11.9571 3.67338 11.8098 3.51666Z" fill="currentColor"></path>
                                                </g>
                                                <defs>
                                                    <clippath>
                                                        <rect width="12" height="12" fill="white" transform="translate(0.5 0.5)"></rect>
                                                    </clippath>
                                                </defs>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="text-lg text-black hover:text-gray-700 font-medium transition duration-200">Plans &amp; pricing</a>
                                    </li>
                                </ul>
                                <div class="flex flex-col items-center gap-2">
                                    <a class="inline-flex justify-center items-center text-center w-full h-12 py-5 px-6 font-semibold text-black hover:text-black focus:text-black bg-transparent hover:bg-white focus:bg-white border border-gray-100 rounded-full focus:ring-4 focus:ring-white focus:ring-opacity-50 transition duration-200" href="#">Login</a>
                                    <a class="inline-flex justify-center items-center text-center w-full h-12 py-5 px-6 font-semibold text-white hover:text-white focus:text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 rounded-full focus:ring-4 focus:ring-blue-200 transition duration-200" href="#">Get started</a>
                                </div>
                            </div>
                        </nav>
                    </div>
                </section>
                          
                <section class="py-24 md:py-36" style="background: url('/fily-assets/gradients/gradient-features.jpg'); background-size: cover;" x-data="{ showContent: false }">
                    <div class="container mx-auto px-4">
                        <h2 class="mb-10 font-heading text-4xl md:text-5xl text-white text-center font-bold">Features</h2>
                        <p class="mb-20 text-xl text-white font-medium text-center">Explore the powerful features that make HelpMeExplain.</p>
                        <div class="flex flex-wrap -m-2.5">
                            <div class="w-full md:w-1/2 lg:w-2/3 p-2.5">
                                <div class="py-20 px-10 md:px-16 h-full bg-white bg-opacity-20 border border-white rounded-3xl">
                                    <h3 class="font-heading mb-6 text-3xl text-white font-bold">Powerful sidekick in your communication (Its AI)</h3>
                                    <p class="mb-10 text-xl font-medium text-white leading-relaxed max-w-lg">Share a thread and get access to AI to explain and simplify communication for you and that one client who doesnt get you.</p>
                                    <ul>
                                        <li class="mb-5 flex items-center">
                                            <img class="mr-3" src="/fily-assets/features/icon.svg" alt="">
                                            <span class="text-lg font-medium text-white">Ask the dumb sounding questions in private and get answers without letting other person know(your client can too)</span>
                                        </li>
                                        <li class="mb-5 flex items-center">
                                            <img class="mr-3" src="/fily-assets/features/icon.svg" alt="">
                                            <span class="text-lg font-medium text-white">Craft your ideas to the right format so that the other person can understand</span>
                                        </li>
                                        <li class="mb-5 flex items-center">
                                            <img class="mr-3" src="/fily-assets/features/icon.svg" alt="">
                                            <span class="text-lg font-medium text-white">get access to predefined user-personas, It might be your client, collaborator or a contractor, then use it to craft your message for them.</span>
                                        </li>
                                        <li class="mb-5 flex items-center">
                                            <img class="mr-3" src="/fily-assets/features/icon.svg" alt="">
                                            <span class="text-lg font-medium text-white">create your own personas and save it.</span>
                                        </li>
                                        <li :class="{'hidden': !showContent}" class="mb-5 flex hidden items-center">
                                            <img class="mr-3" src="/fily-assets/features/icon.svg" alt="">
                                            <span class="text-lg font-medium text-white">AI Assistant</span>
                                        </li>
                                        <li :class="{'hidden': !showContent}" class="mb-5 flex hidden items-center">
                                            <img class="mr-3" src="/fily-assets/features/icon.svg" alt="">
                                            <span class="text-lg font-medium text-white">Multi-language Support</span>
                                        </li>
                                        <li :class="{'hidden': !showContent}" class="flex hidden items-center">
                                            <img class="mr-3" src="/fily-assets/features/icon.svg" alt="">
                                            <span class="text-lg font-medium text-white">Social Media Integration</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="w-full md:w-1/2 lg:w-1/3 p-2.5">
                                <div class="flex flex-col h-full">
                                    <div class="py-12 px-10 mb-5 flex-1 bg-white bg-opacity-20 border border-white rounded-3xl">
                                        <h3 class="mb-7 font-heading text-2xl text-white font-bold">Generate Diagrams</h3>
                                        <p class="text-white font-medium leading-relaxed">generate diagrams that will explain the concepts or flows you are trying to communicate</p>
                                    </div>
                                    <div class="py-12 px-10 flex-1 bg-white bg-opacity-20 border border-white rounded-3xl">
                                        <h3 class="mb-7 font-heading text-2xl text-white font-bold">Save and look back</h3>
                                        <p class="text-white font-medium leading-relaxed">summarise and look back to previous conversations</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div :class="{'hidden': showContent}" class="flex justify-center mt-20">
                            <a href="#" x-on:click.prevent="showContent = true" class="inline-flex justify-center items-center text-center h-18 p-8 px-10 font-semibold text-white hover:text-white focus:text-white bg-pink-500 hover:bg-pink-600 focus:bg-ping-600 rounded-full focus:ring-4 focus:ring-pink-200 transition duration-200">See all features</a>
                        </div>
                    </div>
                </section>
                          
                <section class="relative py-24 md:py-36 bg-black">
                    <img class="absolute top-0 left-0 w-full h-full object-cover select-none" src="/fily-assets/gradients/gradient-how-it-work.png" alt="">
                    <div class="relative container mx-auto px-4">
                        <h3 class="mb-20 font-heading text-4xl xl:text-5xl text-white text-center font-bold">How it works</h3>
                        <div class="max-w-5xl mx-auto">
                            <div class="p-12 lg:p-24 bg-white bg-opacity-5 rounded-3xl">
                                <div class="flex flex-wrap -m-6 mb-14">
                                    <div class="w-full md:w-auto p-6">
                                        <div class="relative flex items-center justify-center w-18 h-18 bg-blue-500 rounded-full">
                                            <div class="hidden md:block absolute -bottom-28 -mb-3 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-10 h-24 rounded-xl" style="width: 3px;"></div>
                                            <span class="text-3xl text-white font-medium">1</span>
                                        </div>
                                    </div>
                                    <div class="w-full md:flex-1 p-6">
                                        <h3 class="mb-8 font-heading text-3xl md:text-4xl text-white font-medium">You select a persona or share a link to your client</h3>
                                        <p class="text-xl text-white font-light leading-normal">This provides context on the communication disparity. for example: you a non-technical founder is explaining the feature to your software engineer.</p>
                                    </div>
                                </div>
                                <div class="flex flex-wrap -m-6 mb-14">
                                    <div class="w-full md:w-auto p-6">
                                        <div class="relative flex items-center justify-center w-18 h-18 bg-pink-500 rounded-full">
                                            <div class="hidden md:block absolute -bottom-28 -mb-3 left-1/2 transform -translate-x-1/2 bg-white bg-opacity-10 h-24 rounded-xl" style="width: 3px;"></div>
                                            <span class="text-3xl text-white font-medium">2</span>
                                        </div>
                                    </div>
                                    <div class="w-full md:flex-1 p-6">
                                        <h3 class="mb-8 font-heading text-3xl md:text-4xl text-white font-medium">Provides context and information</h3>
                                        <p class="text-xl text-white font-light leading-normal">In a simple UI, required context and information is provided.</p>
                                    </div>
                                </div>
                                <div class="flex flex-wrap -m-6">
                                    <div class="w-full md:w-auto p-6">
                                        <div class="flex items-center justify-center w-18 h-18 bg-orange-500 rounded-full">
                                            <span class="text-3xl text-white font-medium">3</span>
                                        </div>
                                    </div>
                                    <div class="w-full md:flex-1 p-6">
                                        <h3 class="mb-8 font-heading text-3xl md:text-4xl text-white font-medium">Seamless Communication</h3>
                                        <p class="text-xl text-white font-light leading-normal">Generate or craft your message, ask clarifying questions, craft diagrams, summarise all with the power of cutting edge AI</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                          
                <!-- <section class="py-24 md:py-36 xl:pb-48 bg-black">
                    <div class="container mx-auto px-4">
                        <div class="max-w-5xl mx-auto">
                            <h2 class="mb-20 font-heading text-4xl md:text-5xl font-bold text-white text-center">FAQ</h2>
                            <div x-data="{ accordion: true }" x-on:click="accordion = !accordion" :class="{'bg-gradient-white': !accordion}" class="mb-6 h-full p-px cursor-pointer overflow-hidden rounded-3xl">
                                <div class="relative h-full">
                                    <div class="absolute top-0 left-0 w-full h-full bg-black rounded-3xl"></div>
                                    <div class="block relative z-10 py-10 px-12 rounded-3xl">
                                        <div class="flex flex-wrap items-center justify-between -m-2">
                                            <div class="flex-1 p-2">
                                                <h3 class="font-heading text-3xl font-bold text-white">How can I get started with FilyTreck?</h3>                  
                                            </div>
                                            <div class="w-auto p-2">
                                                <div class="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-full">
                                                    <svg :class="{'hidden': !accordion }" width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.25 6.75H9.25V1.75C9.25 1.41848 9.1183 1.10054 8.88388 0.866117C8.64946 0.631696 8.33152 0.5 8 0.5C7.66848 0.5 7.35054 0.631696 7.11612 0.866117C6.8817 1.10054 6.75 1.41848 6.75 1.75V6.75H1.75C1.41848 6.75 1.10054 6.8817 0.866117 7.11612C0.631696 7.35054 0.5 7.66848 0.5 8C0.5 8.33152 0.631696 8.64946 0.866117 8.88388C1.10054 9.1183 1.41848 9.25 1.75 9.25H6.75V14.25C6.75 14.5815 6.8817 14.8995 7.11612 15.1339C7.35054 15.3683 7.66848 15.5 8 15.5C8.33152 15.5 8.64946 15.3683 8.88388 15.1339C9.1183 14.8995 9.25 14.5815 9.25 14.25V9.25H14.25C14.5815 9.25 14.8995 9.1183 15.1339 8.88388C15.3683 8.64946 15.5 8.33152 15.5 8C15.5 7.66848 15.3683 7.35054 15.1339 7.11612C14.8995 6.8817 14.5815 6.75 14.25 6.75Z" fill="white"></path>
                                                    </svg>
                                                    <svg :class="{'hidden': accordion }" class="hidden" xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewbox="0 0 16 4" fill="none">
                                                        <path d="M14.25 0.75H1.75C1.05964 0.75 0.5 1.30964 0.5 2C0.5 2.69036 1.05964 3.25 1.75 3.25H14.25C14.9404 3.25 15.5 2.69036 15.5 2C15.5 1.30964 14.9404 0.75 14.25 0.75Z" fill="white"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div x-ref="container" class="overflow-hidden h-0 duration-500">
                                            <p class="mt-7 text-lg font-medium text-gray-500 leading-normal">To get started with FilyTreck, simply create an account and log in to begin using the app.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div x-data="{ accordion: true }" x-on:click="accordion = !accordion" :class="{'bg-gradient-white': !accordion}" class="mb-6 h-full p-px cursor-pointer overflow-hidden rounded-3xl">
                                <div class="relative h-full">
                                    <div class="absolute top-0 left-0 w-full h-full bg-black rounded-3xl"></div>
                                    <div class="block relative z-10 py-10 px-12 rounded-3xl">
                                        <div class="flex flex-wrap items-center justify-between -m-2">
                                            <div class="flex-1 p-2">
                                                <h3 class="font-heading text-3xl font-bold text-white">Is there a free trial available for new users?</h3>                  
                                            </div>
                                            <div class="w-auto p-2">
                                                <div class="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-full">
                                                    <svg :class="{'hidden': !accordion }" width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.25 6.75H9.25V1.75C9.25 1.41848 9.1183 1.10054 8.88388 0.866117C8.64946 0.631696 8.33152 0.5 8 0.5C7.66848 0.5 7.35054 0.631696 7.11612 0.866117C6.8817 1.10054 6.75 1.41848 6.75 1.75V6.75H1.75C1.41848 6.75 1.10054 6.8817 0.866117 7.11612C0.631696 7.35054 0.5 7.66848 0.5 8C0.5 8.33152 0.631696 8.64946 0.866117 8.88388C1.10054 9.1183 1.41848 9.25 1.75 9.25H6.75V14.25C6.75 14.5815 6.8817 14.8995 7.11612 15.1339C7.35054 15.3683 7.66848 15.5 8 15.5C8.33152 15.5 8.64946 15.3683 8.88388 15.1339C9.1183 14.8995 9.25 14.5815 9.25 14.25V9.25H14.25C14.5815 9.25 14.8995 9.1183 15.1339 8.88388C15.3683 8.64946 15.5 8.33152 15.5 8C15.5 7.66848 15.3683 7.35054 15.1339 7.11612C14.8995 6.8817 14.5815 6.75 14.25 6.75Z" fill="white"></path>
                                                    </svg>
                                                    <svg :class="{'hidden': accordion }" class="hidden" xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewbox="0 0 16 4" fill="none">
                                                        <path d="M14.25 0.75H1.75C1.05964 0.75 0.5 1.30964 0.5 2C0.5 2.69036 1.05964 3.25 1.75 3.25H14.25C14.9404 3.25 15.5 2.69036 15.5 2C15.5 1.30964 14.9404 0.75 14.25 0.75Z" fill="white"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div x-ref="container" class="overflow-hidden h-0 duration-500">
                                            <p class="mt-7 text-lg font-medium text-gray-500 leading-normal">To get started with FilyTreck, simply create an account and log in to begin using the app.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div x-data="{ accordion: true }" x-on:click="accordion = !accordion" :class="{'bg-gradient-white': !accordion}" class="mb-6 h-full p-px cursor-pointer overflow-hidden rounded-3xl">
                                <div class="relative h-full">
                                    <div class="absolute top-0 left-0 w-full h-full bg-black rounded-3xl"></div>
                                    <div class="block relative z-10 py-10 px-12 rounded-3xl">
                                        <div class="flex flex-wrap items-center justify-between -m-2">
                                            <div class="flex-1 p-2">
                                                <h3 class="font-heading text-3xl font-bold text-white">Can I use FilyTreck on different devices?</h3>                  
                                            </div>
                                            <div class="w-auto p-2">
                                                <div class="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-full">
                                                    <svg :class="{'hidden': !accordion }" width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.25 6.75H9.25V1.75C9.25 1.41848 9.1183 1.10054 8.88388 0.866117C8.64946 0.631696 8.33152 0.5 8 0.5C7.66848 0.5 7.35054 0.631696 7.11612 0.866117C6.8817 1.10054 6.75 1.41848 6.75 1.75V6.75H1.75C1.41848 6.75 1.10054 6.8817 0.866117 7.11612C0.631696 7.35054 0.5 7.66848 0.5 8C0.5 8.33152 0.631696 8.64946 0.866117 8.88388C1.10054 9.1183 1.41848 9.25 1.75 9.25H6.75V14.25C6.75 14.5815 6.8817 14.8995 7.11612 15.1339C7.35054 15.3683 7.66848 15.5 8 15.5C8.33152 15.5 8.64946 15.3683 8.88388 15.1339C9.1183 14.8995 9.25 14.5815 9.25 14.25V9.25H14.25C14.5815 9.25 14.8995 9.1183 15.1339 8.88388C15.3683 8.64946 15.5 8.33152 15.5 8C15.5 7.66848 15.3683 7.35054 15.1339 7.11612C14.8995 6.8817 14.5815 6.75 14.25 6.75Z" fill="white"></path>
                                                    </svg>
                                                    <svg :class="{'hidden': accordion }" class="hidden" xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewbox="0 0 16 4" fill="none">
                                                        <path d="M14.25 0.75H1.75C1.05964 0.75 0.5 1.30964 0.5 2C0.5 2.69036 1.05964 3.25 1.75 3.25H14.25C14.9404 3.25 15.5 2.69036 15.5 2C15.5 1.30964 14.9404 0.75 14.25 0.75Z" fill="white"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div x-ref="container" class="overflow-hidden h-0 duration-500">
                                            <p class="mt-7 text-lg font-medium text-gray-500 leading-normal">To get started with FilyTreck, simply create an account and log in to begin using the app.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div x-data="{ accordion: true }" x-on:click="accordion = !accordion" :class="{'bg-gradient-white': !accordion}" class="mb-6 h-full p-px cursor-pointer overflow-hidden rounded-3xl">
                                <div class="relative h-full">
                                    <div class="absolute top-0 left-0 w-full h-full bg-black rounded-3xl"></div>
                                    <div class="block relative z-10 py-10 px-12 rounded-3xl">
                                        <div class="flex flex-wrap items-center justify-between -m-2">
                                            <div class="flex-1 p-2">
                                                <h3 class="font-heading text-3xl font-bold text-white">How can I import or export my tasks and data?</h3>                  
                                            </div>
                                            <div class="w-auto p-2">
                                                <div class="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-full">
                                                    <svg :class="{'hidden': !accordion }" width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.25 6.75H9.25V1.75C9.25 1.41848 9.1183 1.10054 8.88388 0.866117C8.64946 0.631696 8.33152 0.5 8 0.5C7.66848 0.5 7.35054 0.631696 7.11612 0.866117C6.8817 1.10054 6.75 1.41848 6.75 1.75V6.75H1.75C1.41848 6.75 1.10054 6.8817 0.866117 7.11612C0.631696 7.35054 0.5 7.66848 0.5 8C0.5 8.33152 0.631696 8.64946 0.866117 8.88388C1.10054 9.1183 1.41848 9.25 1.75 9.25H6.75V14.25C6.75 14.5815 6.8817 14.8995 7.11612 15.1339C7.35054 15.3683 7.66848 15.5 8 15.5C8.33152 15.5 8.64946 15.3683 8.88388 15.1339C9.1183 14.8995 9.25 14.5815 9.25 14.25V9.25H14.25C14.5815 9.25 14.8995 9.1183 15.1339 8.88388C15.3683 8.64946 15.5 8.33152 15.5 8C15.5 7.66848 15.3683 7.35054 15.1339 7.11612C14.8995 6.8817 14.5815 6.75 14.25 6.75Z" fill="white"></path>
                                                    </svg>
                                                    <svg :class="{'hidden': accordion }" class="hidden" xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewbox="0 0 16 4" fill="none">
                                                        <path d="M14.25 0.75H1.75C1.05964 0.75 0.5 1.30964 0.5 2C0.5 2.69036 1.05964 3.25 1.75 3.25H14.25C14.9404 3.25 15.5 2.69036 15.5 2C15.5 1.30964 14.9404 0.75 14.25 0.75Z" fill="white"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div x-ref="container"  class="overflow-hidden h-0 duration-500">
                                            <p class="mt-7 text-lg font-medium text-gray-500 leading-normal">To get started with FilyTreck, simply create an account and log in to begin using the app.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div x-data="{ accordion: true }" x-on:click="accordion = !accordion" :class="{'bg-gradient-white': !accordion}" class="mb-6 h-full p-px cursor-pointer overflow-hidden rounded-3xl">
                                <div class="relative h-full">
                                    <div class="absolute top-0 left-0 w-full h-full bg-black rounded-3xl"></div>
                                    <div class="block relative z-10 py-10 px-12 rounded-3xl">
                                        <div class="flex flex-wrap items-center justify-between -m-2">
                                            <div class="flex-1 p-2">
                                                <h3 class="font-heading text-3xl font-bold text-white">What types of support and assistance do you provide for users?</h3>                  
                                            </div>
                                            <div class="w-auto p-2">
                                                <div class="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-full">
                                                    <svg :class="{'hidden': !accordion }" width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.25 6.75H9.25V1.75C9.25 1.41848 9.1183 1.10054 8.88388 0.866117C8.64946 0.631696 8.33152 0.5 8 0.5C7.66848 0.5 7.35054 0.631696 7.11612 0.866117C6.8817 1.10054 6.75 1.41848 6.75 1.75V6.75H1.75C1.41848 6.75 1.10054 6.8817 0.866117 7.11612C0.631696 7.35054 0.5 7.66848 0.5 8C0.5 8.33152 0.631696 8.64946 0.866117 8.88388C1.10054 9.1183 1.41848 9.25 1.75 9.25H6.75V14.25C6.75 14.5815 6.8817 14.8995 7.11612 15.1339C7.35054 15.3683 7.66848 15.5 8 15.5C8.33152 15.5 8.64946 15.3683 8.88388 15.1339C9.1183 14.8995 9.25 14.5815 9.25 14.25V9.25H14.25C14.5815 9.25 14.8995 9.1183 15.1339 8.88388C15.3683 8.64946 15.5 8.33152 15.5 8C15.5 7.66848 15.3683 7.35054 15.1339 7.11612C14.8995 6.8817 14.5815 6.75 14.25 6.75Z" fill="white"></path>
                                                    </svg>
                                                    <svg :class="{'hidden': accordion }" class="hidden" xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewbox="0 0 16 4" fill="none">
                                                        <path d="M14.25 0.75H1.75C1.05964 0.75 0.5 1.30964 0.5 2C0.5 2.69036 1.05964 3.25 1.75 3.25H14.25C14.9404 3.25 15.5 2.69036 15.5 2C15.5 1.30964 14.9404 0.75 14.25 0.75Z" fill="white"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div x-ref="container"  class="overflow-hidden h-0 duration-500">
                                            <p class="mt-7 text-lg font-medium text-gray-500 leading-normal">To get started with FilyTreck, simply create an account and log in to begin using the app.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div x-data="{ accordion: true }" x-on:click="accordion = !accordion" :class="{'bg-gradient-white': !accordion}" class="h-full p-px cursor-pointer overflow-hidden rounded-3xl">
                                <div class="relative h-full">
                                    <div class="absolute top-0 left-0 w-full h-full bg-black rounded-3xl"></div>
                                    <div class="block relative z-10 py-10 px-12 rounded-3xl">
                                        <div class="flex flex-wrap items-center justify-between -m-2">
                                            <div class="flex-1 p-2">
                                                <h3 class="font-heading text-3xl font-bold text-white">Are my data and information secure in FilyTreck?</h3>                  
                                            </div>
                                            <div class="w-auto p-2">
                                                <div class="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-full">
                                                    <svg :class="{'hidden': !accordion }" width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M14.25 6.75H9.25V1.75C9.25 1.41848 9.1183 1.10054 8.88388 0.866117C8.64946 0.631696 8.33152 0.5 8 0.5C7.66848 0.5 7.35054 0.631696 7.11612 0.866117C6.8817 1.10054 6.75 1.41848 6.75 1.75V6.75H1.75C1.41848 6.75 1.10054 6.8817 0.866117 7.11612C0.631696 7.35054 0.5 7.66848 0.5 8C0.5 8.33152 0.631696 8.64946 0.866117 8.88388C1.10054 9.1183 1.41848 9.25 1.75 9.25H6.75V14.25C6.75 14.5815 6.8817 14.8995 7.11612 15.1339C7.35054 15.3683 7.66848 15.5 8 15.5C8.33152 15.5 8.64946 15.3683 8.88388 15.1339C9.1183 14.8995 9.25 14.5815 9.25 14.25V9.25H14.25C14.5815 9.25 14.8995 9.1183 15.1339 8.88388C15.3683 8.64946 15.5 8.33152 15.5 8C15.5 7.66848 15.3683 7.35054 15.1339 7.11612C14.8995 6.8817 14.5815 6.75 14.25 6.75Z" fill="white"></path>
                                                    </svg>
                                                    <svg :class="{'hidden': accordion }" class="hidden" xmlns="http://www.w3.org/2000/svg" width="16" height="4" viewbox="0 0 16 4" fill="none">
                                                        <path d="M14.25 0.75H1.75C1.05964 0.75 0.5 1.30964 0.5 2C0.5 2.69036 1.05964 3.25 1.75 3.25H14.25C14.9404 3.25 15.5 2.69036 15.5 2C15.5 1.30964 14.9404 0.75 14.25 0.75Z" fill="white"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        <div x-ref="container" class="overflow-hidden h-0 duration-500">
                                            <p class="mt-7 text-lg font-medium text-gray-500 leading-normal">To get started with FilyTreck, simply create an account and log in to begin using the app.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> -->
                          
                <!-- <section class="py-24 md:py-36 bg-black overflow-hidden" x-data="{ slideWidth: 0, activeSlide: 0, slideCount: 3 }">
                    <div class="container mx-auto px-4">
                        <h2 class="mb-24 font-heading text-4xl md:text-5xl font-bold text-white">What others say about us</h2>
                        <div :style="'transform: translateX(-' + slideWidth + 'px)'" class="flex transition-transform duration-500 ease-in-out -m-5 mb-14">
                            <div x-ref="slide1" class="flex-shrink-0 max-w-xl w-full p-5">
                                <div class="relative py-18 px-14 bg-white bg-opacity-5 rounded-3xl">
                                    <div class="mb-12 p-2.5 pr-5 max-w-max rounded-5xl">
                                        <div class="flex flex-wrap items-center -m-2.5">
                                            <div class="w-auto p-2.5">
                                                <img class="h-16" src="/fily-assets/testimonials/avatar.png" alt="">
                                            </div>
                                            <div class="flex-1 p-2.5">
                                                <h3 class="font-heading text-2xl font-bold text-white">Aleeza Keller</h3>
                                                <span class="text-sm text-blue-500 font-medium">CEO, Founder</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p class="text-xl font-light text-gray-500 leading-normal">Aliquam erat enim, feugiat non ante tincidunt, efficitur molestie elit. Cras molestie lectus non risus laoreet tempor. Morbi ac faucibus nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices. Aenean in orci tempor nunc.</p>
                                </div>
                            </div>
                            <div x-ref="slide2" class="flex-shrink-0 max-w-xl w-full p-5">
                                <div class="relative py-18 px-14 bg-white bg-opacity-5 rounded-3xl">
                                    <div class="mb-12 p-2.5 pr-5 max-w-max rounded-5xl">
                                        <div class="flex flex-wrap items-center -m-2.5">
                                            <div class="w-auto p-2.5">
                                                <img class="h-16 rounded-full" src="/fily-assets/testimonials/pic2.jpg" alt="">
                                            </div>
                                            <div class="flex-1 p-2.5">
                                                <h3 class="font-heading text-2xl font-bold text-white">Stephen Leblanc</h3>
                                                <span class="text-sm text-blue-500 font-medium">CEO, Founder</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p class="text-xl text-gray-500 font-light leading-normal">Aliquam erat enim, feugiat non ante tincidunt, efficitur molestie elit. Cras molestie lectus non risus laoreet tempor. Morbi ac faucibus nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices. Aenean in orci tempor nunc.</p>
                                </div>
                            </div>
                            <div x-ref="slide3" class="flex-shrink-0 max-w-xl w-full p-5">
                                <div class="relative py-18 px-14 bg-white bg-opacity-5 rounded-3xl">
                                    <div class="mb-12 p-2.5 pr-5 max-w-max rounded-5xl">
                                        <div class="flex flex-wrap items-center -m-2.5">
                                            <div class="w-auto p-2.5">
                                                <img class="h-16 rounded-full" src="/fily-assets/testimonials/pic.jpg" alt="">
                                            </div>
                                            <div class="flex-1 p-2.5">
                                                <h3 class="font-heading text-2xl font-bold text-white">Natasha Adams</h3>
                                                <span class="text-sm text-blue-500 font-medium">CEO, Founder</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p class="text-xl text-gray-500 font-light leading-normal">Aliquam erat enim, feugiat non ante tincidunt, efficitur molestie elit. Cras molestie lectus non risus laoreet tempor. Morbi ac faucibus nisl. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices. Aenean in orci tempor nunc.</p>
                                </div>
                            </div>
                        </div>
                        <div class="flex flex-wrap items-center -m-7">
                            <div class="w-full md:flex-1 p-7">
                                <div class="relative bg-white bg-opacity-10 overflow-hidden rounded-full" style="height: 3px;" x-data="{ progress: 0 }" x-init="progress = 100 / slideCount">
                                    <div class="absolute top-0 left-0 h-full bg-blue-500" :style="`width: ${progress * (activeSlide + 1)}%`"></div>
                                </div>
                            </div>
                            <div class="w-full md:w-auto p-7">
                                <div class="flex flex-wrap justify-center md:justify-end">
                                    <div class="w-auto p-2">
                                        <a href="#" x-on:click.prevent="activeSlide &gt; 0 ? (activeSlide -= 1, slideWidth -= $refs['slide' + (activeSlide + 1)].offsetWidth) : null" class="flex items-center justify-center w-14 h-14 text-gray-500 hover:text-white focus:text-white bg-white bg-opacity-10 hover:bg-blue-500 focus:bg-blue-500 focus:ring focus:ring-blue-200 rounded-full transition duration-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewbox="0 0 16 16" fill="none">
                                                <path d="M7.31536 13.7141C7.40574 13.6211 7.47747 13.5105 7.52643 13.3886C7.57538 13.2667 7.60059 13.1359 7.60059 13.0039C7.60059 12.8718 7.57538 12.7411 7.52643 12.6192C7.47747 12.4973 7.40574 12.3867 7.31536 12.2937L4.14286 9.00276L13.7857 9.00276C14.0415 9.00276 14.2867 8.89738 14.4676 8.70979C14.6484 8.5222 14.75 8.26777 14.75 8.00248C14.75 7.73719 14.6484 7.48277 14.4676 7.29518C14.2867 7.10759 14.0415 7.0022 13.7857 7.0022L4.14286 7.0022L7.31536 3.71127C7.40574 3.61828 7.47747 3.50765 7.52643 3.38576C7.57539 3.26387 7.60059 3.13312 7.60059 3.00107C7.60059 2.86903 7.57539 2.73828 7.52643 2.61639C7.47747 2.4945 7.40574 2.38386 7.31536 2.29087C7.13469 2.10457 6.89029 2 6.63553 2C6.38078 2 6.13638 2.10457 5.95571 2.29087L1.81893 6.59209C1.45675 6.96554 1.25215 7.47276 1.25 8.00248C1.25469 8.52874 1.4591 9.03187 1.81893 9.40288L5.95571 13.7041C6.13511 13.8917 6.37879 13.9981 6.63355 14C6.8883 14.0018 7.13341 13.8991 7.31536 13.7141Z" fill="currentColor"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div class="w-auto p-2">
                                        <a href="#" x-on:click.prevent="activeSlide &lt; slideCount - 1 ? (activeSlide += 1, slideWidth += $refs['slide' + activeSlide].offsetWidth) : activeSlide = slideCount - 1" class="flex items-center justify-center w-14 h-14 text-white hover:text-white focus:text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 focus:ring focus:ring-blue-200 rounded-full transition duration-200">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewbox="0 0 16 16" fill="none">
                                                <path d="M8.68464 2.28591C8.59426 2.3789 8.52253 2.48953 8.47357 2.61142C8.42461 2.73332 8.39941 2.86406 8.39941 2.99611C8.39941 3.12816 8.42461 3.2589 8.47357 3.38079C8.52253 3.50269 8.59426 3.61332 8.68464 3.70631L11.8571 6.99723L2.21429 6.99724C1.95854 6.99724 1.71327 7.10262 1.53243 7.29021C1.35159 7.4778 1.25 7.73223 1.25 7.99752C1.25 8.26281 1.35159 8.51723 1.53243 8.70482C1.71327 8.89241 1.95854 8.9978 2.21429 8.9978L11.8571 8.9978L8.68464 12.2887C8.59426 12.3817 8.52253 12.4923 8.47357 12.6142C8.42461 12.7361 8.39941 12.8669 8.39941 12.9989C8.39941 13.131 8.42461 13.2617 8.47357 13.3836C8.52253 13.5055 8.59426 13.6161 8.68464 13.7091C8.86531 13.8954 9.10971 14 9.36447 14C9.61922 14 9.86362 13.8954 10.0443 13.7091L14.1811 9.40791C14.5432 9.03446 14.7478 8.52724 14.75 7.99752C14.7453 7.47126 14.5409 6.96812 14.1811 6.59712L10.0443 2.29591C9.86489 2.10827 9.62121 2.0019 9.36645 2.00002C9.1117 1.99815 8.86659 2.10093 8.68464 2.28591Z" fill="currentColor"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> -->
                          
                <section class="pt-20">
                    <div class="container mx-auto px-4">
                        <img class="mb-16 h-9 mx-auto" src="/logo.png" alt="">
                        <div class="flex flex-wrap justify-center -m-2 mb-14">
                            <div class="w-auto p-2">
                                <a href="#" class="inline-block px-4 py-3 font-medium hover:bg-gray-50 focus:bg-gray-50 border border-gray-100 rounded-full transition duration-200">
                                    <span>Our features</span>
                                </a>
                            </div>
                            <div class="w-auto p-2">
                                <a href="#" class="inline-block px-4 py-3 font-medium hover:bg-gray-50 focus:bg-gray-50 border border-gray-100 rounded-full transition duration-200">
                                    <span>How to use?</span>
                                </a>
                            </div>
                            <div class="w-auto p-2">
                                <a href="#" class="inline-block px-4 py-3 font-medium hover:bg-gray-50 focus:bg-gray-50 border border-gray-100 rounded-full transition duration-200">
                                    <span>Use cases</span>
                                </a>
                            </div>
                            <div class="w-auto p-2">
                                <a href="#" class="inline-block px-4 py-3 font-medium hover:bg-gray-50 focus:bg-gray-50 border border-gray-100 rounded-full transition duration-200">
                                    <span>Plans &amp; pricing</span>
                                </a>
                            </div>
                            <div class="w-auto p-2">
                                <a href="#" class="inline-block px-4 py-3 font-medium hover:bg-gray-50 focus:bg-gray-50 border border-gray-100 rounded-full transition duration-200">
                                    <span>Help center</span>
                                </a>
                            </div>
                        </div>
                        <div class="max-w-xl pb-20 mx-auto text-center">
                            <h2 class="mb-10 font-heading text-4xl font-medium">Subscribe to our newsletter</h2>
                            <div class="relative p-1.5 bg-gray-50 rounded-2xl focus-within:ring-4 focus-within:ring-blue-200 sm:rounded-full transition duration-200">
                                <div class="relative">
                                    <input id="footers-input-04-1" type="text" class="py-4 px-6 sm:pr-40 w-full text-black placeholder-black font-semibold text-center sm:text-left bg-transparent outline-none" placeholder="Your email address">
                                    <a href="#" class="sm:absolute sm:top-0 sm:right-0 inline-flex justify-center items-center text-center w-full sm:w-auto h-14 sm:h-full py-2 px-6 font-semibold text-white hover:text-white focus:text-white bg-blue-500 hover:bg-blue-600 focus:bg-blue-600 rounded-2xl sm:rounded-full transition duration-200">Get started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-black">
                        <div class="container mx-auto px-4">
                            <div class="py-6">
                                <div class="flex flex-wrap items-center justify-between -m-2">
                                    <div class="w-auto p-2">
                                        <p class="text-white font-medium">© Shuffle 2023. All rights reserved.</p>
                                    </div>
                                    <div class="w-auto p-2">
                                        <ul class="flex flex-wrap gap-2">
                                            <li>
                                                <a href="#" class="flex items-center justify-center w-10 h-10 bg-gray-50 hover:bg-gray-100 rounded-full transition duration-200">
                                                    <svg width="16" height="16" viewbox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M12.3731 1.20056H14.7039L9.61187 7.02038L15.6022 14.9398H10.9118L7.23814 10.1367L3.03463 14.9398H0.702494L6.14886 8.71489L0.402344 1.20056H5.21177L8.53245 5.59079L12.3731 1.20056ZM11.5551 13.5448H12.8466L4.51001 2.52235H3.12411L11.5551 13.5448Z" fill="#060918"></path>
                                                    </svg>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" class="flex items-center justify-center w-10 h-10 bg-gray-50 hover:bg-gray-100 rounded-full transition duration-200">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewbox="0 0 17 17" fill="none">
                                                        <g clip-path="url(#clip0_323_395)">
                                                            <path d="M0.25 1.89813C0.25 1.35919 0.438632 0.914572 0.815878 0.564277C1.19313 0.213966 1.68356 0.0388184 2.28716 0.0388184C2.87999 0.0388184 3.35963 0.211266 3.72611 0.556193C4.10336 0.911888 4.29199 1.37536 4.29199 1.94664C4.29199 2.46401 4.10876 2.89515 3.74228 3.24007C3.36503 3.59577 2.86921 3.77362 2.25483 3.77362H2.23866C1.64583 3.77362 1.16619 3.59577 0.79971 3.24007C0.433231 2.88438 0.25 2.43706 0.25 1.89813ZM0.460183 16.0451V5.2449H4.04947V16.0451H0.460183ZM6.03813 16.0451H9.62741V10.0144C9.62741 9.63718 9.67053 9.34616 9.75676 9.14138C9.90765 8.7749 10.1367 8.46501 10.4439 8.21172C10.7511 7.95842 11.1364 7.83177 11.5999 7.83177C12.8071 7.83177 13.4107 8.64555 13.4107 10.2731V16.0451H17V9.85277C17 8.25752 16.6228 7.04763 15.8682 6.22306C15.1137 5.3985 14.1167 4.98621 12.8772 4.98621C11.4867 4.98621 10.4035 5.58443 9.62741 6.78086V6.81319H9.61125L9.62741 6.78086V5.2449H6.03813C6.05968 5.58981 6.07046 6.66228 6.07046 8.46232C6.07046 10.2623 6.05968 12.7899 6.03813 16.0451Z" fill="#060918"></path>
                                                        </g>
                                                        <defs>
                                                            <clippath id="clip0_323_395">
                                                                <rect width="16.75" height="16.0063" fill="white" transform="translate(0.25 0.0388184)"></rect>
                                                            </clippath>
                                                        </defs>
                                                    </svg>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
              </div>
</template>

<script setup>
</script>