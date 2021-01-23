import {  Disposable } from '@theia/core';
import uri from '@theia/core/lib/common/uri';
import { FileChange, FileDeleteOptions, FileOverwriteOptions, FileSystemProviderCapabilities, FileSystemProviderWithFileReadWriteCapability, FileType, FileWriteOptions, Stat, WatchOptions } from '@theia/filesystem/lib/common/files';
import {injectable} from 'inversify';
//@ts-ignore
import FS from '@isomorphic-git/lightning-fs';
import { Deferred } from '@theia/core/lib/common/promise-util';
import { Emitter } from '@theia/core/lib/common/event';

@injectable()
export class TheiaGitViewerStorageProvider implements FileSystemProviderWithFileReadWriteCapability {

    protected fs: any;
    protected readonly deferredReady = new Deferred<void>();
    
    constructor(){

        this.fs = new FS('filesystem').promises;
        this.fs.writeFile('/home/codespace/hello.txt', "Hello WOrld")
        // BrowserFS.FileSystem.IndexedDB.Create({}, (e: any, idbfs: any) => {
        //     BrowserFS.FileSystem.MountableFileSystem.Create({
        //         '/': idbfs,
        //     }, (e: any, mfs: any) => {
        //         BrowserFS.initialize(mfs);
        //         if (e) {
        //             // An error happened!
        //             throw e;
        //             this.deferredReady.reject(e);
        //           }
        //           const fs = require("fs")
        //           this.fs = fs;
        //           try{
        //             mfs.mkdirSync("/home/codespace")
        //           } catch(e){
        //               console.log(e)
        //           }
        //           try{
        //             idbfs.mkdirSync("/home/codespace")
        //           } catch(e){
        //               console.log(e)
        //           }
        //           this.deferredReady.resolve(undefined);
        //           console.log("this", JSON.stringify(this.fs));
        //           console.log("mfs", JSON.stringify(mfs));
        //           console.log("idbfs", JSON.stringify(idbfs));
        //         // BFS is now ready to use!
        //     });
        // });

        // BrowserFS.install(window);
        // BrowserFS.configure({
        //     fs: "IndexedDB",
        //     options: {
        //         storeName: "theia"
        //     }
        //   }, (e: any) => {
        //     if (e) {
        //       // An error happened!
        //       throw e;
        //       this.deferredReady.reject(e);
        //     }
        //     const fs = require("fs")
        //     this.fs = fs;
        //     // fs.mkdirSync("/home")
        //     this.deferredReady.resolve(undefined);
        //     console.log(JSON.stringify(this.fs));
        //     console.log(JSON.stringify(fs));
        //     // Otherwise, BrowserFS is ready-to-use!
        //   });
    }

    get ready(): Promise<void> {
        return this.deferredReady.promise;
    }

    readFile(resource: uri): Promise<Uint8Array> {
        throw new Error('Method not implemented.');
    }
    writeFile(resource: uri, content: Uint8Array, opts: FileWriteOptions): Promise<void> {
        throw new Error('Method not implemented.');
    }
    capabilities: FileSystemProviderCapabilities.FileReadWrite;

    private readonly onDidChangeCapabilitiesEmitter = new Emitter<void>();
    readonly onDidChangeCapabilities = this.onDidChangeCapabilitiesEmitter.event;
    
    private readonly onDidChangeFileEmitter = new Emitter<readonly FileChange[]>();
    readonly onDidChangeFile = this.onDidChangeFileEmitter.event;

    private readonly onFileWatchErrorEmitter = new Emitter<void>();
    readonly onFileWatchError = this.onFileWatchErrorEmitter.event;

    watch(resource: uri, opts: WatchOptions): Disposable {
        console.log(resource)
        
        throw new Error('Method not implemented.');
    }
    stat(resource: uri): Promise<Stat> {
        console.log(resource, this.fs.stat(resource.toString()))
        throw new Error('Method not implemented.');
    }
    mkdir(resource: uri): Promise<void> {
        console.log(resource)
        
        throw new Error('Method not implemented.');
    }
    readdir(resource: uri): Promise<[string, FileType][]> {
        console.log(resource)
        
        throw new Error('Method not implemented.');
    }
    delete(resource: uri, opts: FileDeleteOptions): Promise<void> {
        throw new Error('Method not implemented.');
    }
    rename(from: uri, to: uri, opts: FileOverwriteOptions): Promise<void> {
        throw new Error('Method not implemented.');
    }

} 