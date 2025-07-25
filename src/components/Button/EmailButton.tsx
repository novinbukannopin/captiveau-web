import React from 'react'
import clsx from 'clsx'

const EmailButton = ({ dark }: { dark?: boolean }) => {
    return (
        <a href="mailto:hello@captiveau.com">
            <button
                type="button"
                className={clsx(
                    'flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-fit',
                    {
                        'text-white bg-foreground': dark,
                        'text-foreground bg-white': !dark,
                    }
                )}
            >
                <div className="mr-3">
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true"
                         xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M11 16v-5.5A3.5 3.5 0 0 0 7.5 7m3.5 9H4v-5.5A3.5 3.5 0 0 1 7.5 7m3.5 9v4M7.5 7H14m0 0V4h2.5M14 7v3m-3.5 6H20v-6a3 3 0 0 0-3-3m-2 9v4m-8-6.5h1"/>
                    </svg>

                </div>
                <div>
                    <div className="text-xs">SEND US AN</div>
                    <div className="-mt-1 font-sans text-xl font-semibold">Email</div>
                </div>
            </button>
        </a>
    )
}

export default EmailButton
