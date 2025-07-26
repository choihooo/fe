import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

interface AxiosError extends Error {
  code?: string;
  response?: {
    status?: number;
  };
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);

    if (this.isNetworkError(error)) {
      this.checkTokenAndRedirect();
    }
  }

  isNetworkError(error: Error): boolean {
    return (
      error.name === "AxiosError" &&
      (error as AxiosError).code === "ERR_NETWORK"
    );
  }

  isDevelopment(): boolean {
    return process.env.NODE_ENV === "development";
  }

  checkTokenAndRedirect = () => {
    if (typeof window !== "undefined") {
      const accessToken = localStorage.getItem("accessToken");
      const refreshToken = localStorage.getItem("refreshToken");

      if (!accessToken || !refreshToken) {
        console.log("🔐 토큰이 없어서 로그인 페이지로 리디렉션");
        localStorage.clear();
        window.location.replace("/login");
      }
    }
  };

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      if (this.state.error && this.isNetworkError(this.state.error)) {
        return (
          <div className="mx-2 flex justify-between w-[471px]">
            <div className="flex">
              <div className="w-[58px] h-[58px] bg-gray-200 rounded-full" />
              <div className="my-[3px] ml-[18px] text-start">
                <div className="font-T04-SB text-gray-900">
                  {this.isDevelopment()
                    ? "API 서버 연결 실패"
                    : "네트워크 연결 오류"}
                </div>
                <div className="font-B02-R text-gray-300">
                  {this.isDevelopment()
                    ? "개발 서버가 실행 중인지 확인해주세요"
                    : "인터넷 연결을 확인해주세요"}
                </div>
                <button
                  onClick={this.handleRetry}
                  className="mt-2 px-4 py-2 bg-blue-main text-white rounded-lg text-sm hover:bg-blue-600 transition-colors"
                >
                  다시 시도
                </button>
              </div>
            </div>
          </div>
        );
      }

      return (
        <div className="mx-2 flex justify-between w-[471px]">
          <div className="flex">
            <div className="w-[58px] h-[58px] bg-gray-200 rounded-full" />
            <div className="my-[3px] ml-[18px] text-start">
              <div className="font-T04-SB text-gray-900">
                오류가 발생했습니다
              </div>
              <div className="font-B02-R text-gray-300">
                잠시 후 다시 시도해주세요
              </div>
              <button
                onClick={this.handleRetry}
                className="mt-2 px-4 py-2 bg-blue-main text-white rounded-lg text-sm hover:bg-blue-600 transition-colors"
              >
                다시 시도
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
