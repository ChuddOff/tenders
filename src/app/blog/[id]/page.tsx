import Post from "@/app/_components/blog/[id]/Post"
import Spinner from "@/components/ui/spinner"
import { Suspense } from "react"

interface Props {
    params: {
        id: string
    }
}

export default function Page({ params }: Props) {
    return (
        <Suspense fallback={<Spinner className=" mx-auto" width={25} height={25}/>}>
            <Post id={params.id} />
        </Suspense>
    )
}