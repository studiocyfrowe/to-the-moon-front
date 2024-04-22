"use client"
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function Breadcrumb() {
  const router = useRouter();
  // Check if router is ready and asPath is defined
  if (!router.isReady || !router.asPath) {
    return null; // or return a loading indicator
  }

  const pathSegments = router.asPath.split('/').filter(Boolean);
  return (
    <nav aria-label="breadcrumb">
      <ol className="breadcrumb">
        {pathSegments.map((segment, index) => {
          const routePath = `/${pathSegments.slice(0, index + 1).join('/')}`;
          const isLast = index === pathSegments.length - 1;
          const isRoot = index === 0;
          const segmentName = segment.charAt(0).toUpperCase() + segment.slice(1); // Capitalize first letter

          return (
            <li key={routePath} className={`breadcrumb-item${isLast ? ' active' : ''}`}>
              {isLast ? (
                segmentName
              ) : (
                <Link href={routePath}>
                  <a>{segmentName}</a>
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};