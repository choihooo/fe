# React Query 설정 및 사용법

이 프로젝트에서는 `@tanstack/react-query`를 사용하여 API 상태 관리를 구현했습니다.

## 📁 파일 구조

```
src/
├── libs/
│   └── react-query.ts          # React Query 클라이언트 설정
├── components/
│   ├── providers/
│   │   └── QueryProvider.tsx   # React Query Provider
│   └── examples/
│       └── AuthExample.tsx     # 사용 예시 컴포넌트
└── hooks/
    ├── queries/
    │   ├── useAuth.ts          # 인증 관련 React Query 훅
    │   ├── useUser.ts          # 사용자 관련 React Query 훅
    │   └── index.ts            # 훅 export
    └── useAuth.ts              # 기존 인증 훅 (하위 호환성)
```

## 🚀 설정

### 1. React Query 클라이언트 설정
```typescript
// src/libs/react-query.ts
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5분
      gcTime: 10 * 60 * 1000,   // 10분
      retry: 1,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 1,
    },
  },
});
```

### 2. Provider 설정
```typescript
// src/app/layout.tsx
import { QueryProvider } from "@/components/providers/QueryProvider";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
```

## 📚 사용 가능한 훅들

### 인증 관련 훅

#### `useAuthQuery()`
인증 상태를 조회하는 쿼리 훅
```typescript
const { data, isLoading, error } = useAuthQuery();
// data: { isLoggedIn: boolean, profile: { name?: string, profileImage?: string } | null }
```

#### `useExchangeCodeForToken()`
인증 코드를 토큰으로 교환하는 뮤테이션 훅
```typescript
const exchangeMutation = useExchangeCodeForToken();

const handleExchange = () => {
  exchangeMutation.mutate("auth_code");
};

// 상태 확인
console.log(exchangeMutation.isPending); // 로딩 상태
console.log(exchangeMutation.isError);   // 에러 상태
console.log(exchangeMutation.error);     // 에러 객체
```

#### `useLogout()`
로그아웃 뮤테이션 훅
```typescript
const logoutMutation = useLogout();

const handleLogout = () => {
  logoutMutation.mutate();
};
```

### 사용자 관련 훅

#### `useAgreeToTerms()`
이용약관 동의 뮤테이션 훅
```typescript
const agreeMutation = useAgreeToTerms();

const handleAgree = () => {
  agreeMutation.mutate({ agreed: true });
};
```

#### `useOnboardUser()`
사용자 온보딩 뮤테이션 훅
```typescript
const onboardMutation = useOnboardUser();

const handleOnboard = () => {
  onboardMutation.mutate({
    name: "사용자명",
    profileImage: "https://example.com/image.jpg"
  });
};
```

## 🎯 사용 예시

### 컴포넌트에서 사용하기
```typescript
'use client';

import { useAuthQuery, useExchangeCodeForToken } from '@/hooks/queries';

export function MyComponent() {
  const { data: authData, isLoading } = useAuthQuery();
  const exchangeMutation = useExchangeCodeForToken();

  const handleLogin = (code: string) => {
    exchangeMutation.mutate(code, {
      onSuccess: (data) => {
        console.log('로그인 성공:', data);
      },
      onError: (error) => {
        console.error('로그인 실패:', error);
      }
    });
  };

  if (isLoading) return <div>로딩 중...</div>;

  return (
    <div>
      <p>로그인 상태: {authData?.isLoggedIn ? '로그인됨' : '로그아웃됨'}</p>
      <button 
        onClick={() => handleLogin('your_auth_code')}
        disabled={exchangeMutation.isPending}
      >
        {exchangeMutation.isPending ? '처리 중...' : '로그인'}
      </button>
    </div>
  );
}
```

## 🔧 쿼리 키 관리

쿼리 키는 각 도메인별로 관리됩니다:

```typescript
// 인증 관련
export const authKeys = {
  all: ['auth'] as const,
  user: () => [...authKeys.all, 'user'] as const,
  token: () => [...authKeys.all, 'token'] as const,
};

// 사용자 관련
export const userKeys = {
  all: ['user'] as const,
  agreement: () => [...userKeys.all, 'agreement'] as const,
  onboarding: () => [...userKeys.all, 'onboarding'] as const,
};
```

## 🛠️ 개발 도구

React Query Devtools가 포함되어 있어 개발 중에 쿼리 상태를 쉽게 확인할 수 있습니다.

- 쿼리 캐시 상태 확인
- 뮤테이션 상태 확인
- 쿼리 무효화 및 리페치 테스트

## 📝 주요 기능

1. **자동 캐싱**: API 응답을 자동으로 캐시하여 불필요한 요청 방지
2. **백그라운드 업데이트**: 데이터가 stale 상태일 때 백그라운드에서 자동 업데이트
3. **에러 처리**: 자동 재시도 및 에러 상태 관리
4. **로딩 상태**: 각 요청의 로딩 상태를 쉽게 확인
5. **캐시 무효화**: 뮤테이션 성공 시 관련 쿼리 자동 무효화

## 🔄 기존 코드와의 호환성

기존의 `useAuth` 훅은 그대로 유지되며, 새로운 `useAuthQuery` 훅을 사용할 수 있습니다:

```typescript
// 기존 방식 (여전히 사용 가능)
const { isLoggedIn, profile } = useAuth();

// 새로운 React Query 방식
const { data: authData, isLoading } = useAuthQuery();
```

## 🚨 주의사항

1. 모든 React Query 훅은 클라이언트 컴포넌트에서만 사용해야 합니다.
2. `'use client'` 지시어를 잊지 마세요.
3. 뮤테이션 훅은 `mutate` 함수를 호출해야 실행됩니다.
4. 쿼리 키는 타입 안전성을 위해 `as const`를 사용합니다. 