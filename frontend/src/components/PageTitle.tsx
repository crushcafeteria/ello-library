import { Typography } from "@mui/material";

export function PageTitle({ title, description }: { title: string, description: string }) {
    return (
        <div className="px-6 pt-32 mb-20">
            <div className="mx-auto max-w-2xl text-center">
                <Typography color='primary' variant="h2" className="text-5xl font-bold tracking-tight">{title}</Typography>
                <p className="mt-4 text-lg leading-8 text-slate-500">
                    {description}
                </p>
            </div>
        </div>
    )
}