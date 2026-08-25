#!/usr/bin/env node
import { genericMain } from './core.js';
const args=process.argv.slice(2);
if(args.includes('--version')||args[0]==='version'){console.log('0.1.0');process.exit(0)}
if(args.includes('--help')||args.includes('-h')){console.log(`Snippet Manager - Store and retrieve reusable snippets\n\nUsage: snip [command] [options]\n\nOptions:\n  --help       Show help\n  --version    Show version\n  --json       Output JSON when supported\n  --yes        Confirm destructive action\n  --dry-run    Preview changes\n`);process.exit(0)}
genericMain('snippet-manager-cli',args).catch((error:unknown)=>{console.error('Error:',error instanceof Error?error.message:String(error));process.exitCode=1});
