import React, { FC } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import { DrawerPostContainer, DrawerPostSkeletonBody } from './styles';

const DrawerPostSkeleton: FC = () => (
  <>
    {new Array(9).fill('').map((_, idx) => (
      <DrawerPostContainer isDismissing={false} key={idx} style={{ opacity: 1 - idx / 10 }}>
        <div style={{ marginBottom: 10 }} />
        <SkeletonTheme color="#ddd" highlightColor="#fff">
          <div style={{ display: 'flex' }}>
            <div style={{ width: 20, height: 20, marginRight: 10 }}>
              <Skeleton height={20} width={20} circle />
            </div>
            <div style={{ flexGrow: 1, height: 20 }}>
              <Skeleton height={20} width="30%" />
              <Skeleton height={0} width="40%" />
              <Skeleton height={20} width="30%" />
            </div>
          </div>
          <div style={{ marginBottom: 10 }} />
          <DrawerPostSkeletonBody>
            <div style={{ marginRight: 10 }}>
              <Skeleton circle height={50} width={50} />
            </div>
            <div style={{ flexGrow: 1 }}>
              <Skeleton height={10} width="100%" count={3} />
            </div>
          </DrawerPostSkeletonBody>
          <Skeleton height={20} width="30%" />
          <Skeleton height={0} width="40%" />
          <Skeleton height={20} width="30%" />
        </SkeletonTheme>
      </DrawerPostContainer>
    ))}
  </>
);

export default DrawerPostSkeleton;
