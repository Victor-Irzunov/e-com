"use client"
import { usePathname } from 'next/navigation';

function Breadcrumbs() {
    const path = usePathname();
    const pathArray = path.split('/').filter(Boolean);

    return (
        <div className="text-sm breadcrumbs px-2 py-3">
            <ul>
                <li>
                    <a href="/">Главная</a>
                </li>
                {pathArray.map((segment, index) => (
                    <li key={index}>
                        <a href={`/${pathArray.slice(0, index + 1).join('/')}`}>
                            {segment}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Breadcrumbs;

