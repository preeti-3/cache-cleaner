import { CheckCircle, Download, ExternalLink, Terminal } from 'lucide-react';


const Hero = () => {

    return (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div>
                    <div className="inline-block px-3 py-1 bg-[#007acc]/20 border border-[#007acc]/40 rounded text-sm text-[#3794ff] mb-6">
                        For PHP Developers
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 leading-tight">
                        Clear <span className="text-[#4ec9b0]">Cache</span> Without Leaving <span className="text-[#007acc]">VS Code</span>
                    </h2>
                    <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 lg:mb-8 leading-relaxed">
                        A simple, efficient VS Code extension that adds one-click cache clearing for your Drupal and CiviCRM projects. Works with both local VS Code and web-based code-server environments.
                    </p>

                    {/* Get Extension Buttons */}
                    <div className="mb-8">
                        <p className="text-sm text-gray-400 mb-3">Get the extension:</p>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a
                                href="https://marketplace.visualstudio.com/items?itemName=UR-Services.ur-cache-cleaner"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0098ff] hover:bg-[#007acc] rounded font-medium transition-all hover:scale-105 shadow-lg shadow-[#0098ff]/20"
                            >
                                <Download className="w-5 h-5" />
                                VS Code Marketplace
                                <ExternalLink className="w-4 h-4" />
                            </a>
                            <a
                                href="https://open-vsx.org/extension/UR-Services/ur-cache-cleaner"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#3e3e42] hover:bg-[#4e4e52] border border-[#0098ff]/30 rounded font-medium transition-colors"
                            >
                                <Download className="w-5 h-5" />
                                Open VSX Registry
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* VS Code Preview */}
                <div className="bg-[#1e1e1e] border border-[#3e3e42] rounded-lg overflow-hidden shadow-2xl">
                    {/* VS Code Title Bar */}
                    <div className="bg-[#2d2d30] px-4 py-2 flex items-center justify-between border-b border-[#3e3e42]">
                        <div className="flex items-center gap-3">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
                            </div>
                            <span className="text-xs sm:text-sm text-gray-400">index.php — Drupal Project</span>
                        </div>
                    </div>

                    {/* VS Code Editor Area */}
                    <div className="bg-[#1e1e1e] p-4 sm:p-6 font-mono text-xs sm:text-sm">
                        <div className="space-y-2 mb-6">
                            <div className="text-gray-500">1  <span className="text-[#569cd6]">{'<?php'}</span></div>
                            <div className="text-gray-500">2</div>
                            <div className="text-gray-500">3  <span className="text-[#c586c0]">use</span> <span className="text-[#4ec9b0]">Drupal\Core\Cache\Cache</span>;</div>
                            <div className="text-gray-500">4</div>
                            <div className="text-gray-500">5  <span className="text-gray-500">// Development code here...</span></div>
                        </div>

                        {/* Output Panel */}
                        <div className="bg-[#252526] border border-[#3e3e42] rounded p-3 sm:p-4 mb-4">
                            <div className="text-xs text-gray-400 mb-2">OUTPUT</div>
                            <div className="space-y-1 text-xs sm:text-sm">
                                <div className="text-[#4ec9b0]">✓ Cache rebuild complete</div>
                                <div className="text-[#4ec9b0]">✓ Configuration cache cleared</div>
                                <div className="text-[#4ec9b0]">✓ All cache bins emptied</div>
                                <div className="text-[#3794ff] mt-2">Cache cleared successfully in 1.2s</div>
                            </div>
                        </div>

                        {/* Status Bar */}
                        <div className="bg-[#007acc] text-white px-3 sm:px-4 py-2 rounded flex items-center justify-between text-xs">
                            <div className="flex items-center gap-3 sm:gap-6">
                                <span className="hidden sm:inline">Drupal 10.2</span>
                                <span>UTF-8</span>
                                <span>PHP</span>
                            </div>
                            <div className="flex items-center gap-2 sm:gap-4">
                                <button className="flex items-center gap-1 sm:gap-2 hover:bg-white/10 px-2 py-1 rounded transition-colors">
                                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                                    <span className="hidden sm:inline font-medium">Clear Cache</span>
                                </button>
                                <button className="flex items-center gap-1 sm:gap-2 hover:bg-white/10 px-2 py-1 rounded transition-colors">
                                    <Terminal className="w-3 h-3 sm:w-4 sm:h-4" />
                                    <span className="hidden sm:inline font-medium">CiviCRM</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero