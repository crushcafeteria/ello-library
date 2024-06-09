export function PageTitle({ title, description }: { title: string, description: string }) {
    return (
        <div className="px-6 pt-32 mb-20">
            <div className="mx-auto max-w-2xl text-center">
                <h2 className="mt-2 text-4xl font-bold tracking-tight">{title}</h2>
                <p className="mt-6 text-lg leading-8 text-slate-500">
                    {description}
                </p>
            </div>
        </div>
    )
}