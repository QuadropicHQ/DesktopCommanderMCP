import path from 'path';
import os from 'os';

// Use user's home directory for configuration files
export const USER_HOME = process.env.WORK_DIR || os.homedir();
const CONFIG_DIR = path.join(os.homedir(), '.qdpcsyntheo/settings');

// Paths relative to the config directory
export const CONFIG_FILE = path.join(CONFIG_DIR, 'fsconfig.json');
export const TOOL_CALL_FILE = path.join(CONFIG_DIR, 'claude_tool_call.log');

export const DEFAULT_COMMAND_TIMEOUT = 1000; // milliseconds
