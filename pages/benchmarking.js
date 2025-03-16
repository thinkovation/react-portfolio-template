import React from "react";
import Header from "../components/Header";
import { useTheme } from "next-themes";

export default function Benchmarking() {
  const { theme } = useTheme();

  return (
    <div className="relative">
      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="container mx-auto mb-10">
        <Header />

        <div className="mt-10">
          <div className="flex flex-col items-center justify-center md:flex-row">
            <div className="w-full md:w-2/3">
              <h1 className="text-5xl font-bold text-primary-900 dark:text-primary-100">
                Self-service Tech Due Diligence
              </h1>
              <p className="mt-5 text-xl text-gray-700 dark:text-gray-300">
                Comprehensive technology assessment and benchmarking platform for modern software companies.
              </p>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-primary-800 dark:text-primary-200">
              Key Assessment Areas
            </h2>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Architecture Assessment */}
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-primary-700 dark:text-primary-300">
                  Architecture Assessment
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Evaluate system design, scalability, and technical debt
                </p>
              </div>

              {/* Security Review */}
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-primary-700 dark:text-primary-300">
                  Security Review
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Assess security practices, compliance, and vulnerability management
                </p>
              </div>

              {/* Development Practices */}
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-primary-700 dark:text-primary-300">
                  Development Practices
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Review development processes, code quality, and team practices
                </p>
              </div>

              {/* Infrastructure */}
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-primary-700 dark:text-primary-300">
                  Infrastructure
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Analyze cloud infrastructure, deployment, and operational efficiency
                </p>
              </div>

              {/* Data Management */}
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-primary-700 dark:text-primary-300">
                  Data Management
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Evaluate data architecture, storage, and processing capabilities
                </p>
              </div>

              {/* Performance */}
              <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-primary-700 dark:text-primary-300">
                  Performance
                </h3>
                <p className="mt-2 text-gray-600 dark:text-gray-400">
                  Measure system performance, scalability, and optimization
                </p>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-primary-800 dark:text-primary-200">
              How It Works
            </h2>
            <div className="mt-8 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900">
                  <span className="text-primary-600 dark:text-primary-300">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-700 dark:text-primary-300">
                    Complete Assessment
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Answer detailed questions about your technology stack and practices
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900">
                  <span className="text-primary-600 dark:text-primary-300">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-700 dark:text-primary-300">
                    Receive Analysis
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Get detailed insights and benchmarks against industry standards
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900">
                  <span className="text-primary-600 dark:text-primary-300">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-primary-700 dark:text-primary-300">
                    Action Plan
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Get prioritized recommendations and improvement strategies
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 