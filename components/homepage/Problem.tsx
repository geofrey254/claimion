import {
  AlertTriangle,
  CheckCircle,
  Clock,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import React from "react";

export default function Problem() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[48px] font-bold text-[#041740] mb-4">
            The Problem with <br /> Traditional Assessment
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Manual vehicle damage assessment is slow, inconsistent, and prone to
            human error. We{"'"}ve built the solution.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Pain Points */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Lengthy Processing Times
                </h3>
                <p className="text-gray-600">
                  Claims take 5-10 days for assessment, causing customer
                  frustration and delayed settlements.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Inconsistent Results
                </h3>
                <p className="text-gray-600">
                  Different assessors provide varying estimates for identical
                  damage, leading to disputes and inefficiencies.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Human Error Risk
                </h3>
                <p className="text-gray-600">
                  Manual assessments are susceptible to oversight, fatigue, and
                  subjective interpretation.
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-2xl shadow-sm border">
              <h4 className="font-semibold text-gray-900 mb-2">The Result:</h4>
              <p className="text-red-600 font-medium">
                Higher costs, unhappy customers, and operational inefficiencies
              </p>
            </div>
          </div>

          {/* Right: Solution Comparison */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-red-50 px-6 py-4 border-b">
                <h4 className="font-semibold text-red-800 flex items-center">
                  <AlertTriangle className="w-4 h-4 mr-2" />
                  Traditional Manual Report
                </h4>
              </div>
              <div className="p-6">
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Processing Time:</span>
                    <span className="text-red-600 font-medium">5-10 days</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Accuracy:</span>
                    <span className="text-red-600 font-medium">
                      Variable (75-85%)
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Consistency:</span>
                    <span className="text-red-600 font-medium">Low</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cost per Assessment:</span>
                    <span className="text-red-600 font-medium">
                      Kes 1500-3000
                    </span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-red-50 rounded-lg">
                  <p className="text-xs text-red-700">
                    ❌ Handwritten notes, subjective estimates, multiple
                    revisions required
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-blue-200">
              <div className="bg-blue-50 px-6 py-4 border-b">
                <h4 className="font-semibold text-blue-800 flex items-center">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Claimion AI Report
                </h4>
              </div>
              <div className="p-6">
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Processing Time:</span>
                    <span className="text-green-600 font-medium">
                      30 seconds
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Accuracy:</span>
                    <span className="text-green-600 font-medium">99.2%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Consistency:</span>
                    <span className="text-green-600 font-medium">Perfect</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cost per Assessment:</span>
                    <span className="text-green-600 font-medium">Kes 12</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <p className="text-xs text-green-700">
                    ✅ AI-powered analysis, detailed damage mapping, instant
                    comprehensive reports
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-gray-50 to-white rounded-3xl p-8 md:p-12 border-2 border-gray-100 mt-8">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              The Transformation
            </h3>
            <p className="text-gray-600 text-lg">
              See how Claimion revolutionizes vehicle damage assessment
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#f9463a] to-[#f9463a]/80 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <TrendingUp className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-[#f9463a] mb-2">95%</div>
              <div className="text-gray-600 font-medium">Faster Processing</div>
              <div className="text-sm text-gray-500 mt-1">
                From days to seconds
              </div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#0a4586] to-blue-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Target className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-[#0a4586] mb-2">24x</div>
              <div className="text-gray-600 font-medium">More Accurate</div>
              <div className="text-sm text-gray-500 mt-1">99.2% vs 75-85%</div>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-2">25x</div>
              <div className="text-gray-600 font-medium">Cost Effective</div>
              <div className="text-sm text-gray-500 mt-1">
                Kes 12 vs Kes 1500-3000
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
            <div className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#0a4586] to-[#f9463a] text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer">
              <Zap className="w-6 h-6 mr-3" />
              Transform Your Claims Process Today
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
