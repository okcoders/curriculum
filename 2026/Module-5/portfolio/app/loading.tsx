'use client'
import { DotLottieReact } from '@lottiefiles/dotlottie-react'

export default function LoadingProjects() {
    return (
        <div>
            <h1>Loading...</h1>
            <DotLottieReact src="/loading.lottie" loop autoplay />
        </div>
    )
}